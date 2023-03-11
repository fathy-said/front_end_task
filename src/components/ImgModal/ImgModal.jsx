import React, { useCallback, useState } from "react";
import "./ImgModal.css";
import IconButton from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";
const ImgModal = ({ setDisplayTypeModal, displayTypeModal, imgModalData }) => {
  const [imgIndex, setImgIndex] = useState(0);


  const changeTargetImg = (e) => {
    if (e.currentTarget.classList.contains("left")) {
      if (imgIndex < imgModalData.length - 1) {
        setImgIndex(imgIndex + 1)

      }
    }
    if (e.currentTarget.classList.contains("right")) {
      if (imgIndex > 0) {
        setImgIndex(imgIndex - 1)

      }
    }
  };
  return (
    <>
      <div
        className="img-modal select-none fixed w-full h-[100vh] z-10 top-0 left-0"
        style={{ display: displayTypeModal }}
      >
        <div className="container flex items-center  flex-col-reverse relative justify-center h-full">
          <div className="box  flex items-center justify-between w-full">
            <span className=" right left-[15px]" onClick={(e) => {
              changeTargetImg(e);
            }}>
              <svg
                width="20"
                height="34"
                viewBox="0 0 20 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.101318 17L16.128 33.0267L19.8987 29.256L7.63198 16.9893L19.8987 4.72267L16.128 0.973331L0.101318 17Z"
                  fill="white"
                />
              </svg>
            </span>
            <span
              className=" left right-[15px]"
              onClick={(e) => {
                changeTargetImg(e);
              }}
            >
              <svg
                width="20"
                height="34"
                viewBox="0 0 20 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9013 17L3.87199 0.973331L0.101318 4.744L12.368 17.0107L0.101318 29.2587L3.87199 33.0293L19.9013 17Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>

          <div className="box-img mb-[20px]  z-20 relative w-full max-w-[960px] max-h-[600px]  ">
            <img
              className="  w-full object-cover rounded-[4px] max-h-[100%]"
              src={imgModalData[imgIndex]}
              alt=""
            />
            <IconButton
              className="close"
              disableRipple
              onClick={() => {
                setDisplayTypeModal("none");
                setImgIndex(0)

              }}
            >
              <Close
                sx={{
                  fontWeight: "bold",
                  color: "#000",
                  fontSize: "20px",
                }}
              />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(ImgModal);
