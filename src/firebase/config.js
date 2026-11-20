// Firebase is used ONLY for the contact form (Cloud Firestore, "messages" collection).
// Credentials come from Vite environment variables — see .env.example.
// Nothing is hardcoded, and the SDK is loaded lazily so it never affects first paint.

const env = import.meta.env;

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId,
);

let dbPromise;

async function getDb() {
  if (!dbPromise) {
    dbPromise = (async () => {
      const [{ initializeApp, getApps, getApp }, { getFirestore }] =
        await Promise.all([
          import("firebase/app"),
          import("firebase/firestore"),
        ]);
      const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
      return getFirestore(app);
    })();
  }
  return dbPromise;
}

// Firestore queues writes while it cannot reach the server, so addDoc() can wait forever.
// Racing it against a timeout makes the form fail visibly instead of spinning.
const SEND_TIMEOUT_MS = 12000;

export async function saveContactMessage({ name, email, subject, message }) {
  if (!isFirebaseConfigured) throw new Error("firebase-not-configured");
  const [db, { collection, addDoc, serverTimestamp }] = await Promise.all([
    getDb(),
    import("firebase/firestore"),
  ]);

  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error("timeout")), SEND_TIMEOUT_MS);
  });

  try {
    await Promise.race([
      addDoc(collection(db, "messages"), {
        name,
        email,
        subject,
        message,
        createdAt: serverTimestamp(),
      }),
      timeout,
    ]);
  } catch (err) {
    // Shows the real cause (e.g. "permission-denied" when Firestore rules block writes) in the browser console.
    console.error(
      "[contact form] Firestore write failed:",
      err?.code || err?.message || err,
    );
    throw err;
  } finally {
    clearTimeout(timer);
  }
}
