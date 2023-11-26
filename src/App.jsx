import React from "react";
import chat from "./assets/download.png";
import { FaPlus } from "react-icons/fa";
import { BsChatRight } from "react-icons/bs";

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
                  <FaPlus
                    color="white"
                   
                    style={{ fontWeight: "bold" }}
                  />{" "}
                  New Chat
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
                    <BsChatRight  />
                    How to Use API?
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* lower */}
          <div className="lower"></div>
        </div>
        {/* main */}
        <div className="main"></div>
      </div>
    </>
  );
};

export default App;
