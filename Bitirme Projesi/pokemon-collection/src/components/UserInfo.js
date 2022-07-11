import React from "react";
import { Image } from "react-bootstrap";
import ProfileImage from "../Assets/Profile_Image.svg";

export default function UserInfo(props) {
  return (
    <div className="card borderless-card p-3 py-4">
      <div className="container">
        <div className="row">
          <div className="col-2 ">
            <div className="d-flex justify-content-center mt-5">
              <Image
                src={props.user.photoURL}
                fluid="true"
                roundedCircle="true"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="text-center mt-3">
              <span className="bg-secondary p-1 px-4 rounded text-white">
                {props.user.displayName}
              </span>
              <div className="px-4 mt-3">
                <p className="fonts">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <Image src={ProfileImage} alt="React Logo" fluid="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
