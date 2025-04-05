import "./servicesSection.css";
import { useRef, useState } from "react";
import Counter from "./Counter";
import { motion, useInView } from "motion/react";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import PlaystationModelContainer from "./playstation/PlaystationModelContainer";
import MugModelContainer from "./mug/MugModelContainer";

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

const services = [
  {
    id: 1,
    img: "/service1.png",
    counter: 35,
    title: "Web Development",
  },
  {
    id: 2,
    img: "/service2.png",
    counter: 15,
    title: "Product Design",
  },
  {
    id: 3,
    img: "/service3.png",
    counter: 115,
    title: "Branding",
  },
];

function ServicesSection() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  const [currentServiceId, setCurrentServiceId] = useState(1);

  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          How do I help?
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
          <Counter from={0} to={122} text="Projects Completed" />
          <Counter from={0} to={99} text="Happy Clients" />
        </div>
      </div>
      <div className="sSection right">
        {currentServiceId === 1 ? (
          <ComputerModelContainer />
        ) : currentServiceId === 2 ? (
          <PlaystationModelContainer />
        ) : (
          <MugModelContainer />
        )}
      </div>
    </div>
  );
}

export default ServicesSection;
