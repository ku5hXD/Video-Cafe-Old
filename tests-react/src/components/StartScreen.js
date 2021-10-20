import React from "react";
import '../css/StartScreen.css'
import { Link } from "react-router-dom";

const StartScreen = () => {

    return (
        <div>
            <div
                className="HomeContainer"
                style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
            </div>

            <div className="container">
                <h1 className="main-title">Welcome to </h1>
                <h1 className="main-title2">Video Cafe</h1>

                <Link to="/home/all">
                    <button className="start--btn">Start</button>
                </Link>
            </div>
        </div>
    )

}

export default StartScreen