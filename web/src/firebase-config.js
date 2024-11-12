/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyBxJJVyIndVvr_cWY8ctTQ2DNOhOy94fY0",
  authDomain: "go4lunch-8d458.firebaseapp.com",
  databaseURL: "https://go4lunch-8d458.firebaseio.com",
  projectId: "go4lunch-8d458",
  storageBucket: "go4lunch-8d458.firebasestorage.app",
  messagingSenderId: "837308858740",
  appId: "1:837308858740:web:3d0ac56056690f2c71ec21",
  measurementId: "G-T325GR5339"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}