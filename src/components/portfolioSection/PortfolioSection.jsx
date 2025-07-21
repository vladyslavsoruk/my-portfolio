import { useEffect, useRef, useState } from "react";
import "./portfolioSection.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import PortfolioSlider from "./PortfolioSlider";

const items = [
  {
    id: 1,
    title: "Full Stack MERN Blog Application",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
    slideshow: [
      "/mern-blog-app/p1.png",
      "/mern-blog-app/p2.png",
      "/mern-blog-app/p3.png",
      "/mern-blog-app/p4.png",
      "/mern-blog-app/p5.png",
      "/mern-blog-app/p6.png",
      "/mern-blog-app/p7.png",
      "/mern-blog-app/p8.png",
    ],
  },
  {
    id: 2,
    title: "School Management System",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
    slideshow: [
      "/school-management-system/p1.png",
      "/school-management-system/p2.png",
      "/school-management-system/p3.png",
      "/school-management-system/p4.png",
      "/school-management-system/p5.png",
      "/school-management-system/p6.png",
      "/school-management-system/p7.png",
      "/school-management-system/p8.png",
    ],
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
    slideshow: [
      "/aspnet-cinema-app/p1.png",
      "/aspnet-cinema-app/p2.png",
      "/aspnet-cinema-app/p3.png",
      "/aspnet-cinema-app/p4.png",
      "/aspnet-cinema-app/p5.png",
      "/aspnet-cinema-app/p6.png",
      "/aspnet-cinema-app/p7.png",
      // "/school-management-system/p2.png",
      // "/school-management-system/p3.png",
    ],
  },
  {
    id: 4,
    title: "Social Media Project",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
    slideshow: [
      "/mern-blog-app/p1.png",
      "/mern-blog-app/p2.png",
      "/mern-blog-app/p3.png",
      "/mern-blog-app/p4.png",
      "/mern-blog-app/p5.png",
      "/mern-blog-app/p6.png",
      "/mern-blog-app/p7.png",
    ],
  },
  {
    id: 5,
    title: "Animated Portfolio Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
    slideshow: [
      "/mern-blog-app/p1.png",
      "/mern-blog-app/p2.png",
      "/mern-blog-app/p3.png",
      "/mern-blog-app/p4.png",
      "/mern-blog-app/p5.png",
      "/mern-blog-app/p6.png",
      "/mern-blog-app/p7.png",
    ],
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
        <PortfolioSlider portfolioImages={item.slideshow} />
        {/* <img src={item.img} alt={item.title} /> */}
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
