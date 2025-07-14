import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function PortfolioSlider({ portfolioImages }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowBack />,
    nextArrow: <IoIosArrowForward />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {portfolioImages.map((img, index) => {
          return (
            <div key={index} className="slideImgContainer">
              <img src={img} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default PortfolioSlider;
