import "./servicesSection.css";
import { useContext, useEffect, useRef, useState } from "react";
import Counter from "./Counter";
import { motion, useInView } from "motion/react";
import ComputerModelContainer from "../heroSection/computer/MacbookModelContainer";
import PlaystationModelContainer from "./playstation/PlaystationModelContainer";
import MugModelContainer from "./mug/MugModelContainer";
import MouseTrailArea from "./mouseTrailEffect/MouseTrailArea";
import { LanguageContext } from "../../providers/LanguageProvider";
import { ThemeContext } from "../../providers/ThemeProvider";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

function ServicesSection() {
  const ref = useRef();
  // const isInView = useInView(ref);
  // const isInView = useInView(ref, { margin: "-200px" });
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const { t } = useContext(LanguageContext);
  const [theme] = useContext(ThemeContext);

  const [showReturnBtn, setShowReturnBtn] = useState(false);
  function onScroll() {
    // если проскроллено больше, чем высота окна (первая секция сайта)
    // то показываем кнопку возврата
    // иначе скрываем
    // console.log(
    //   "onScrollEVENT: ",
    //   window.scrollY,
    //   window.innerHeight * (2 / 3),
    //   window.innerHeight,
    //   document.documentElement.clientWidth
    // );
    console.log(
      "onScrollEVENT: ",
      window.innerHeight,
      window.scrollY,
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
      document.documentElement.clientHeight * (2 / 3)
    );
    console.log(
      window.scrollY >= document.documentElement.clientHeight * (2 / 3)
    );

    setShowReturnBtn(
      window.scrollY >= document.documentElement.clientHeight * (2 / 3)
    );
    // setShowReturnBtn(window.scrollY >= window.innerHeight * (2 / 3));
  }
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    // при загрузке страницы проверяем, проскроллено ли больше, чем высота окна
    setShowReturnBtn(window.scrollY >= window.innerHeight * (2 / 3));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const services = [
    {
      id: 1,
      img: "/frontend-white.png",
      counter: 35,
      title: t("frontend"),
    },
    {
      id: 2,
      img: "/backend-white.png",
      counter: 15,
      title: t("backend"),
    },
    {
      id: 3,
      img: "/other-instruments-white.png",
      counter: 115,
      title: t("other"),
    },
  ];

  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          {t("sTitle")}
        </motion.h1>
        <motion.div
          variants={listVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((s) => (
            <motion.div
              className={`service ${currentServiceId === s.id ? "active" : ""}`}
              key={s.id}
              variants={listVariants}
              onClick={() => setCurrentServiceId(s.id)}
            >
              <div className="serviceIcon">
                <img src={s.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{s.title}</h2>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={3} text={t("yearsOfExperience")} />
        </div>
      </div>
      <div className="sSection right">
        {currentServiceId === 1 ? (
          // <ComputerModelContainer />

          <div className="techStackContainer">
            <MouseTrailArea>
              <div className="techStackList">
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  HTML
                </motion.h2>
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  CSS
                </motion.h2>
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  JavaScript
                </motion.h2>
              </div>
              <div className="techStackList">
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  React
                </motion.h2>
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  TypeScript
                </motion.h2>
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  Redux
                </motion.h2>
              </div>
              <div className="techStackList">
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  Next
                </motion.h2>
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  Tailwind
                </motion.h2>
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  MUI
                </motion.h2>
              </div>
            </MouseTrailArea>
          </div>
        ) : currentServiceId === 2 ? (
          <div className="techStackContainer">
            <MouseTrailArea>
              <div className="techStackList">
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  Spring
                </motion.h2>
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  Python
                </motion.h2>
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  .NET
                </motion.h2>
              </div>
              <div className="techStackList">
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  MongoDB
                </motion.h2>
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  PostgreSQL
                </motion.h2>
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  MySQL
                </motion.h2>
              </div>
              <div className="techStackList">
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  NestJS
                </motion.h2>
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  Node js
                </motion.h2>
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  Express
                </motion.h2>
              </div>
              <div className="techStackList">
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  Docker
                </motion.h2>
              </div>
            </MouseTrailArea>
          </div>
        ) : (
          <div className="techStackContainer">
            <MouseTrailArea>
              <div className="techStackList">
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  Git
                </motion.h2>
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  Vercel
                </motion.h2>
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  AWS
                </motion.h2>
                <motion.h2
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  Jest
                </motion.h2>
              </div>
            </MouseTrailArea>
          </div>
        )}

        <div className="counterList-on-small-screen">
          <Counter from={0} to={3} text={t("yearsOfExperience")} />
        </div>
      </div>

      {showReturnBtn && (
        <motion.div
          className="returnButtonContainer"
          onClick={scrollToTop}
          initial={{ x: -95, y: 95, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{
            x: { duration: 2 },
            y: { duration: 2 },
            opacity: { duration: 2 },
          }}
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 300 },
          }}
          whileTap={{
            scale: 0.95,
            transition: { type: "spring", stiffness: 500 },
          }}
        >
          <img
            src={
              theme === "dark" ? "/up-arrow-white.png" : "/up-arrow-violet.png"
            }
            alt="up-arrow"
          />
        </motion.div>
      )}
    </div>
  );
}

export default ServicesSection;
