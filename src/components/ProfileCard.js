import React from "react";
import "../styles/ProfileCard.css";
import User from "../images/defaultProfilePicture.png";
import Cover from "../images/newyork.jpeg";
import { AiFillCheckCircle, AiOutlineMobile } from "react-icons/ai";
import "@fortawesome/fontawesome-free/css/all.css";
import phoneicon from "../images/contact-iphone.png";
import emailicon from "../images/Mail.svg.png";

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

          <h2>
            {name}
            <AiFillCheckCircle className="icon" />
          </h2>

          <p>🏢 {company}</p>
          <p>📍 {address}</p>

          {bio !== "" ? <span>{bio}</span> : <div></div>}
          <br />
          <button className="button" onClick={handleDownloadContact}>
            Save Contact <AiOutlineMobile color="white" className="icon" />
          </button>
        </div>
        <div className="footer">
          {phoneNumber && (
            <a
              href={`tel:${phoneNumber}`}
              className="image-container"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={phoneicon} alt={`Image Call`} />
              <div className="text">
                <p>For inquiries, give us a call.</p>
              </div>
              <div className="phone-number">
                <br />
                <p>{phoneNumber}</p>
              </div>
            </a>
          )}

          {email && (
            <a
              href={`mailto:${email}`}
              className="image-container"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={emailicon} alt={`Image Call`} />
              <div className="text">
                <p>For business inquiries, email us.</p>
                <div className="email">
                  <br />
                  <p>{email}</p>
                </div>
              </div>
            </a>
          )}

          {links &&
            links.map((link, index) => (
              <a
                href={link.link}
                className="image-container"
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <img src={link.imageUrl} alt={`Image ${index}`} />
                <div className="text">
                  <p>{link.bio}</p>
                </div>
              </a>
            ))}
        </div>
        <button className="button_2">Create Your Own Card</button>
      </div>
    </div>
  );
}

export default ProfileCard;
