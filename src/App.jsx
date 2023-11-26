import React from "react";
import chat from "./assets/download.png";
import { FaPlus } from "react-icons/fa";
import { BsChatRight } from "react-icons/bs";
import { BiSolidHome } from "react-icons/bi";
import { FaTag } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { IoSendSharp } from "react-icons/io5";
import baby from "./assets/baby.webp";
import doctor from "./assets/doctor.jpeg";

const App = () => {
  return (
    <>
      <div className="app">
        {/* Sidebar */}
        <div className="sidebar">
          {/* Upperside */}
          <div className="upperside">
            {/* top */}
            <div className="top">
              <div className="top-channel">
                <img src={chat} alt="chat-gpt-logo" width={80} />
                <span>chatGPT</span>
              </div>
              {/* top-bottom */}
              <div className="top-bottom">
                <button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  {" "}
                  <FaPlus color="white" style={{ fontWeight: "bold" }} /> New
                  Chat
                </button>
                {/* what is ???? */}
                <div className="what-is">
                  <button
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    {" "}
                    <BsChatRight />
                    What is Programming?
                  </button>
                  <button
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    {" "}
                    <BsChatRight />
                    How to Use API?
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* lower */}
          <div className="lower">
            <div
              className="list"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <BiSolidHome />
              Home
            </div>
            <div
              className="list"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FaTag />
              Save
            </div>
            <div
              className="list"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <IoRocketSharp />
              Upgrade to Pro
            </div>
          </div>
        </div>
        {/* main */}
        <div className="main">
          <div className="chats">
            <div className="chat">
              <img
                src={baby}
                alt=""
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
              />
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                quaerat saepe repudiandae, doloribus possimus deleniti fuga
                similique beatae amet, asperiores laborum explicabo
                exercitationem repellat eos.
              </p>
            </div>
            <div className="chat">
              <img
                src={doctor}
                alt=""
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
              />
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                quaerat saepe repudiandae, doloribus possimus deleniti fuga
                similique beatae amet, asperiores laborum explicabo
                exercitationem repellat eos.
              </p>
            </div>
          </div>
          <div className="chat-footer">
            <div className="input">
              <input type="text" name="" id="" />
              <IoSendSharp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
