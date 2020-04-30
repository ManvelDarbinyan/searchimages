import React from "react";
import { Link } from "react-router-dom";
import "./ImageView.css";

const ImageView = (props) => {
  const {
    largeImageURL: image,
    tags,
    user: owner,
    pageURL,
  } = props.location.state.image;
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="imageViewContainer">
            <img
              src={image}
              alt={tags}
              className="imageViewImg imgResponsive"
            />
            <div className="imageViewCopyright">
              <p>&copy;pixabay</p>
            </div>
            <div className="imageViewText">
              <h4>
                Credit: <span>{owner}</span>
              </h4>
              <h4>
                Download:{" "}
                <span>
                  <a target="blank" href={pageURL}>
                    Go To Download
                  </a>
                </span>
              </h4>
              <button>
                <Link to="/">Go to search</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageView;
