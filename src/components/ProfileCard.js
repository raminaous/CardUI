import React from "react";
import "../styles/ProfileCard.css";
import User from "../images/defaultProfilePicture.png";
import Cover from "../images/newyork.jpeg";
import { AiFillCheckCircle, AiOutlineMobile } from "react-icons/ai";
import "@fortawesome/fontawesome-free/css/all.css";
import phoneicon from "../images/contact-iphone.png";
import emailicon from "../images/Mail.svg.png";
import styled from "styled-components";

function ProfileCard({
  name,
  company,
  bio,
  profileImage,
  coverImage,
  links,
  phoneNumber,
  email,
  address,
  color,
}) {
  const imageBase64 = profileImage;

  const handleDownloadContact = () => {
    const vCardData =
      `BEGIN:VCARD\r\n` +
      `VERSION:3.0\r\n` +
      `FN:${name}\r\n` +
      `TEL:${phoneNumber}\r\n` +
      `PHOTO;VALUE=URL:${imageBase64}\r\n` +
      `END:VCARD`;

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "contact.vcf";
    link.click();

    URL.revokeObjectURL(url);
  };

  const AddressInfoColumn = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 20vh; 
      p{
        margin-left: 10px;
        margin-right: 10px;
      }
    `

  const SaveButton = styled.button`
   background-color: ${props => "#"+props.color || 'black'}; 
      margin-top: 10px;
      margin-bottom: 10px;
      color: white;
      padding: 20px;
      padding-left: 50px;
      padding-right: 50px;
      border: none;
      border-radius: 500px;
      cursor: pointer;
      font-size: 20px; /* Adjust font size as needed */
      font-weight: bold;
      transition: background-color 0.3s ease, transform 0.2s ease;

      &:hover {
        transform: scale(1.05); /* Add a slight scale effect on hover */
      }

      &:disabled {
        background-color: #888; /* Dark gray for disabled state */
        cursor: not-allowed;
      }
    `;

  const LinkCard = styled.a`
  text-decoration: none;
  color: black;
  width: 100%;
  margin: 10px;
  padding: 20px;
  background-color: #f5f5f4;
  display: flex;
  flex-direction: row;
  text-align: start;
  align-items: center;
  justify-content: start;
  transition: transform 0.2s ease; /* Add a smooth transition for the transform property */



  &:hover {
    transform: scale(1.05); /* Add a slight scale effect on hover */
  }

  img {
  margin-left: 5vw;
  height: 10vh; /* Set a fixed height for the images */
  object-fit: fill; /* Use 'cover' for the object-fit property */
  border-radius: 10px; /* Optionally, you can keep the border-radius */
}


  h3, h4 {
    margin: 10px;
  }
`;


  return (
    <div className="container">
      <div className="wrapper">
        <div>
          <img
            src={coverImage || Cover}
            alt="Cover Image"
            className="background-image"
          />
        </div>
        <div className="content">
          <div className="profile-picture-wrapper">
            <img
              className="profile-picture"
              src={profileImage || User}
              alt="Profile Picture"
            />
          </div>



          <AddressInfoColumn>
            <h2>
              {name}
              <AiFillCheckCircle className="icon" />
            </h2>

            <p>{company}</p>

            {bio !== "" ? <p>{bio}</p> : <div></div>}



          </AddressInfoColumn>

          <SaveButton onClick={handleDownloadContact} color={color}>
            Save Contact
          </SaveButton>



        </div>
        <div className="footer">

          {

            phoneNumber &&
            <LinkCard href={`tel:${phoneNumber}`}>
              <img src={phoneicon} alt={`Image Call`} />
              <div>
                <h3>Contact us anytime.</h3>
                <h4>{phoneNumber}</h4>
              </div>
            </LinkCard>

          }
          {
            email &&
            <LinkCard href={`mailto:${email}`}>
              <img src={emailicon} alt={`Image Call`} />
              <div>
                <h3>Send us an Email!</h3>
                <h4>{email}</h4>
              </div>
            </LinkCard>
          }

          {
            links && links.map((link) => (
              <LinkCard href={link.link}>
                <img src={link.imageUrl} alt={`Image Call`} />
                <div>
                  <h4>{link.bio}</h4>
                </div>
              </LinkCard>
            ))
          }


        </div>
        <button className="button_2">Create Your Own Card</button>
      </div>
    </div>
  );
}

export default ProfileCard;
