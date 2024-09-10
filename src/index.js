import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// pages
import App from './App';
import Vocabulary from "./pages/Vocabulary.tsx";
import ErrorPage from './ErrorPage.tsx';

const firebaseConfig = {
  apiKey: "AIzaSyCVNCseE_RNp4XKHWP37FiDWKf5Dm57J7o",
  authDomain: "slovicka-a9da6.firebaseapp.com",
  projectId: "slovicka-a9da6",
  storageBucket: "slovicka-a9da6.appspot.com",
  messagingSenderId: "1008715832737",
  appId: "1:1008715832737:web:e145649628043491d87fe0"
};

// Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/vocabulary",
    element: <Vocabulary />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
