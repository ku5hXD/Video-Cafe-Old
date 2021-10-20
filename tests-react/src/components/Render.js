import React from "react";
import { Link } from "react-router-dom";
import Thumbnail from "./Thumbnail";
import getDate from "./GetDate";
const Render = ({ data, dates }) => {

    return (
        <div style={{ width: "100%", height: "100%" }}>
            {

                data.map((element, index) => {
                    if (data.length === 0) {
                    } else {
                        return (
                            <div className="custom-card">
                                <Link
                                    to={`/video/${element._id}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Thumbnail thumbnailpath={element.thumbnailpath} key={index} />
                                    <div style={{ marginLeft: "0.5rem" }}>
                                        <h4 className="video-title">{element.videoname}</h4>

                                        <h4
                                            style={{
                                                fontSize: "1rem",
                                                color: "black",
                                            }}
                                        >
                                            {element.category}
                                        </h4>
                                        <p className="date">{getDate(dates[index])}</p>
                                    </div>
                                </Link>
                            </div>
                        );
                    }
                })


            }
        </div>
    )
}

export default Render