import React from "react";
import "../styles/ProfileCard.css";
import { AiFillCheckCircle } from "react-icons/ai";

function ProfileCard() {
  return (
    <div className="container">
      <div className="wrapper">
        <div>
          <img
            src="https://wallpapers.com/images/featured/new-york-aesthetic-hdj6cfehppy286jt.jpg"
            alt=""
            className="background-image"
          />
        </div>
        <div className="content">
          <img
            src="https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg"
            alt=""
          />

          <h2>Rami Naous</h2>

          <p>CEO at X</p>
          <br />
          <span>
            The mission at Popl is simple: Help professionals network better,
            using time-saving and lead collection technology
          </span>
        </div>
        <div className="footer">
          <div className="image-container">
            <img
              src="https://w7.pngwing.com/pngs/441/336/png-transparent-call-log-logo-iphone-4-iphone-3g-iphone-7-telephone-icon-phone-hd-electronics-text-telephone-call.png"
              alt="Image 2"
            />
            <div className="text">
              <p>Call Us</p>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png"
              alt="Image 1"
            />
            <div className="text">
              <p>Follow our journey on Insta</p>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png"
              alt="Image 1"
            />
            <div className="text">
              <p>Email Us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
