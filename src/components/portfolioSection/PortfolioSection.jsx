import { useEffect, useRef, useState } from "react";
import "./portfolioSection.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "Full Stack Blog Application",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "School Management System",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Real-time Chat Application",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "Social Media Project",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Animated Portfolio Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
];

// const imagesVariants = {
//   initial: {
//     x: -500,
//     y: 500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut",
//     },
//   },
// };
// const descVariants = {
//   initial: {
//     x: 500,
//     y: 500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut",
//       staggerChildren: 0.1,
//     },
//   },
// };

const ListItem = ({ item }) => {
  const ref = useRef();
  const isInView = useInView(ref, {
    // amount: 0.5,
    // margin: "-200px",
  });
  return (
    <div className="pItem" ref={ref}>
      <motion.div
        className="pImg"
        // variants={imagesVariants}
        initial="initial"
        animate={isInView ? "animate" : ""}
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        className="pText"
        // variants={descVariants}
        initial="initial"
        animate={isInView ? "animate" : ""}
      >
        <motion.h1
        // variants={descVariants}
        >
          {item.title}
        </motion.h1>
        <motion.p
        // variants={descVariants}
        >
          {item.desc}
        </motion.p>
        <motion.a
          // variants={descVariants}
          href={item.link}
        >
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

function PortfolioSection() {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);
  const [PListWidth, setPListWidth] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref });

  const portfolioSectionIsInView = useInView(ref, { margin: "-10%" });

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setContainerDistance(rect.left);
      // console.log("RECT:", rect);
      // console.log("REACT LEFT:", rect.left);
      // console.log(
      //   "document.documentElement.clientWidth:",
      //   document.documentElement.clientWidth
      // );
      // console.log(
      //   "document.documentElement.clientWidth * items.length",
      //   -document.documentElement.clientWidth * items.length
      // );
      // console.log(
      //   "document.documentElement.clientWidth - rect.left",
      //   document.documentElement.clientWidth - rect.left
      // );
      // console.log(
      //   ".pList width",
      //   document.documentElement.clientWidth * items.length +
      //     document.documentElement.clientWidth -
      //     rect.left
      // );
      setPListWidth(
        document.documentElement.clientWidth * items.length +
          document.documentElement.clientWidth -
          rect.left
      );
    }
  }, []);

  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -document.documentElement.clientWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: translateX }}>
        <div
          style={{
            width: document.documentElement.clientWidth - containerDistance,
          }}
        ></div>
        {items.map((i) => (
          <ListItem item={i} key={i.id} />
        ))}
      </motion.div>
      <section
        style={{ scrollSnapAlign: "center", scrollSnapStop: "always" }}
      />
      <section
        style={{ scrollSnapAlign: "center", scrollSnapStop: "always" }}
      />
      <section
        style={{ scrollSnapAlign: "center", scrollSnapStop: "always" }}
      />
      <section
        style={{ scrollSnapAlign: "center", scrollSnapStop: "always" }}
      />
      <section style={{ scrollSnapAlign: "end", scrollSnapStop: "always" }} />
      <div
        className="pProgress"
        style={{ display: `${portfolioSectionIsInView ? "block" : "none"}` }}
      >
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
}

export default PortfolioSection;
