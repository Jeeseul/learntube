import React from "react";

const cont = {
    display: "inline-table",
    position: "relative"
};

const ImagePart = ({ photo, margin, padding, currentImage }) => {

    return (
        <div className="col-lg-4 col-md-6">
            <div className="gallery-item" style={{ margin, padding, ...cont }}>
                <div className="gallery-img">
                    <img src={photo.src} alt="" />
                </div>
                <div className="title">
                    {photo.title}
                </div>
            </div>
        </div>
    );
};

export default ImagePart;
