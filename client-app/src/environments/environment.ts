// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAilK6F1inAXmHqBjlC8GPuvGJUAXg0aHo",
    authDomain: "sapientusers-9d29c.firebaseapp.com",
    databaseURL: "https://sapientusers-9d29c.firebaseio.com",
    projectId: "sapientusers-9d29c",
    storageBucket: "sapientusers-9d29c.appspot.com",
    messagingSenderId: "670983809457",
    appId: "1:670983809457:web:0ba55d0e995166defcf590",
    measurementId: "G-YV0DS1KVYQ"
  },
  userApi: 'https://us-central1-sapientusers-9d29c.cloudfunctions.net/api'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
