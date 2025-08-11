import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

function PortfolioSlider({ portfolioImages }) {
  const settings = {
    lazyLoad: "ondemand",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowBack />,
    nextArrow: <IoIosArrowForward />,
  };

  // refs for both sliders
  const mainSliderRef = useRef(null);
  const modalSliderRef = useRef(null);

  // modal state
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  // open modal on click of a preview
  const handleImgClick = (index) => {
    const pProgress = document.getElementsByClassName("pProgress")[0];
    const returnButtonContainer = document.getElementsByClassName(
      "returnButtonContainer"
    )[0];
    pProgress.style.display = "none";
    returnButtonContainer.style.display = "none";
    setStartIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    const pProgress = document.getElementsByClassName("pProgress")[0];
    const returnButtonContainer = document.getElementsByClassName(
      "returnButtonContainer"
    )[0];
    pProgress.style.display = "block";
    returnButtonContainer.style.display = "flex";
    setIsOpen(false);
  };

  // lock body scroll while modal open
  useEffect(() => {
    const orig = document.body.style.overflow;
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = orig;
    };
  }, [isOpen]);

  // keyboard handlers (Esc, arrows)
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        modalSliderRef.current?.slickPrev();
      } else if (e.key === "ArrowRight") {
        modalSliderRef.current?.slickNext();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen]);

  return (
    <div className="slider-container">
      <Slider {...settings} ref={mainSliderRef}>
        {portfolioImages.map((img, index) => {
          return (
            <div key={index} className="slideImgContainer">
              <img src={img} onClick={() => handleImgClick(index)} />
            </div>
          );
        })}
      </Slider>
      {isOpen && (
        <div className="fullscreen-overlay" onClick={closeModal}>
          <div
            className="fullscreen-inner"
            onClick={(e) => e.stopPropagation()} // prevent closing modal
          >
            <button
              className="fullscreen-close"
              onClick={closeModal}
              aria-label="Close"
            >
              <IoIosClose className="closeModalCrossBtn" />
            </button>
            <Slider
              ref={modalSliderRef}
              {...{ ...settings, initialSlide: startIndex, dots: true }}
              className="fullscreen-slider"
              // Get index of the current slide and synchronize with main slider
              afterChange={(idx) => {
                mainSliderRef.current?.slickGoTo(idx, true);
              }}
            >
              {portfolioImages.map((img, index) => (
                <div key={index} className="fullscreen-slide">
                  <img src={img} className="fullscreen-image" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioSlider;
