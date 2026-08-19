importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Firebase Config របស់អ្នក
firebase.initializeApp({
  apiKey: "AIzaSyCK7w2phlBp-X6-1ycH4xvvIWuIv6FQH1A",
  authDomain: "my-first-app-babac.firebaseapp.com",
  projectId: "my-first-app-babac",
  storageBucket: "my-first-app-babac.firebasestorage.app",
  messagingSenderId: "997211161853",
  appId: "1:997211161853:web:4befac13bab828d7532a94"
});

const messaging = firebase.messaging();

// បង្ហាញ Pop-up Notification ពេលបិទ Web
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title || "ទូទាត់ជោគជ័យ! 🎉";
  
  const notificationOptions = {
    body: payload.notification.body || "ប្រតិបត្តិការរបស់អ្នកទទួលបានជោគជ័យ។",
    icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png", // រូប Logo ខាងឆ្វេង
    vibrate: [200, 100, 200]
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
