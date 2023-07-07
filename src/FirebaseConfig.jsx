import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBRV0CtPET3goOoSrJ_ZfE1cgc_NxYJG-s",
  authDomain: "tripappfb.firebaseapp.com",
  databaseURL: "https://tripappfb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tripappfb",
  storageBucket: "tripappfb.appspot.com",
  messagingSenderId: "1074735898979",
  appId: "1:1074735898979:web:085c9803760491b5893356",
  measurementId: "G-PT37MZLFG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export { auth, provider}