import "./servicesSection.css";
import { useContext, useRef, useState } from "react";
import Counter from "./Counter";
import { motion, useInView } from "motion/react";
import ComputerModelContainer from "../heroSection/computer/MacbookModelContainer";
import PlaystationModelContainer from "./playstation/PlaystationModelContainer";
import MugModelContainer from "./mug/MugModelContainer";
import MouseTrailArea from "./mouseTrailEffect/MouseTrailArea";
import { LanguageContext } from "../../providers/LanguageProvider";

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
  const isInView = useInView(ref, { margin: "-200px" });
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const { t } = useContext(LanguageContext);

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
                  Vite
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
    </div>
  );
}

export default ServicesSection;
