import "./App.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./config/Config";

async function getDataFirestore() {
  const docRef = doc(db, "users", "efBBCtoacnXKe55Z9cyjT7pgUrJ3");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const cardNumber = queryParams.get("cardNumber");
  const userId = queryParams.get("userId");

  getDataFirestore();

  return (
    <div>
      <p>{cardNumber}</p>
      <p>{userId}</p>
    </div>
  );
}

export default App;
