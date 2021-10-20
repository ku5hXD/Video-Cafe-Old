import React from "react";

const Thumbnail = ({ thumbnailpath }) => {

  return (

    <div>
      <img
        key={thumbnailpath}
        src={thumbnailpath}
        style={{
          width: 350,
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
        }}
        alt="video-thumbnail"
      />
    </div>
  );
};

export default Thumbnail;
