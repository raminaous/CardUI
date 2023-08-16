import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getFirestore, doc, getDoc } from "firebase/firestore";
import { db } from "../config/Config.js";

function DocumentDetails() {
  const { id } = useParams();
  const [documentData, setDocumentData] = useState(null);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const docRef = doc(db, "users", id);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          setDocumentData(docSnapshot.data());
        } else {
          console.log("Document not found");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchDocument();
  }, [id]);

  console.log("documentData:", documentData);

  return (
    <div>
      {documentData ? (
        <div>
          {documentData.userCards.map((userCard, index) => (
            <div key={index}>
              <h3>User Card {index + 1}</h3>
              <p>Name: {userCard.name}</p>
              {userCard.numbers.map((number, numIndex) => (
                <p key={numIndex}>Number: {number}</p>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading document...</p>
      )}
    </div>
  );
}

export default DocumentDetails;
