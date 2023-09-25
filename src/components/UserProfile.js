import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/Config";
import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";

async function getDataFirestore(docId, cardIndex) {
  const docRef = doc(db, "users", docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().userCards[cardIndex];
  } else {
    console.log("No such document!");
    return null;
  }
}

function UserProfile() {
  const queryParams = new URLSearchParams(window.location.search);
  const cardNumber = queryParams.get("cardNumber");
  const userId = queryParams.get("userId");
  const [userCard, setUserCard] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getDataFirestore(userId, cardNumber);
      console.log(data); // Print the data to the console
      setUserCard(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      {userCard && (
        <ProfileCard
          name={userCard.name}
          company={userCard.company}
          bio={userCard.bio}
          profileImage={userCard.profileImage}
          coverImage={userCard.coverImage}
          address={userCard.address}
          links={userCard.links}
          email={userCard.email}
          phoneNumber={userCard.phoneNumber}
        />
      )}
    </div>
  );
}

export default UserProfile;
