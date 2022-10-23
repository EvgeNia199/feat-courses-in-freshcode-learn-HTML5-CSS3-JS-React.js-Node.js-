/*
props: images currentImgId 
button fullscreen
*/

import React, { useCallback } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import styles from "./Slide.module.scss";
import PropTypes from "prop-types";

export default function Slide(props) {
  const { images, currentImgId } = props;
  const handle = useFullScreenHandle();

  return (
    <>
      <div className={styles.containerImg}>
        <FullScreen handle={handle}>
          {/* <div className={styles.activ}>
          <img src={images[currentImgId].image} alt="img" />
          </div> */}

          {images.map((slide, index) => {
            return (
              <div key={index}>
                {index === currentImgId && <img src={slide.image} alt="img" />}
              </div>
            );
          })}
        </FullScreen>
        <button onClick={handle.enter}>Enter fullscreen</button>
      </div>
    </>
  );
}




Slide.prototype = {
  images: PropTypes.array.isRequired,
  currentImgId: PropTypes.func.isRequired,
};
