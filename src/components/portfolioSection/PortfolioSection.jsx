import { useContext, useEffect, useRef, useState } from "react";
import "./portfolioSection.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import PortfolioSlider from "./PortfolioSlider";
import { LanguageContext } from "../../providers/LanguageProvider";

const portfoliosItems = () => {
  const { t } = useContext(LanguageContext);
  return [
    {
      id: 1,
      title: "Full Stack MERN Blog Application",
      desc: t("blogProjectDescription"),
      link: "https://github.com/vladyslavsoruk/mern-blog",
      slideshow: [
        "/mern-blog-app/p1.webp",
        "/mern-blog-app/p2.webp",
        "/mern-blog-app/p3.webp",
        "/mern-blog-app/p4.webp",
        "/mern-blog-app/p5.webp",
        "/mern-blog-app/p6.webp",
        "/mern-blog-app/p7.webp",
        "/mern-blog-app/p8.webp",
      ],
      deployed: "https://vlad-soruk-mern-blog.onrender.com",
    },
    {
      id: 2,
      title: "School Management System",
      desc: t("schoolProjectDescription"),
      link: "https://github.com/vladyslavsoruk/school-management-app",
      slideshow: [
        "/school-management-system/p1.webp",
        "/school-management-system/p2.webp",
        "/school-management-system/p3.webp",
        "/school-management-system/p4.webp",
        "/school-management-system/p5.webp",
        "/school-management-system/p6.webp",
        "/school-management-system/p7.webp",
        "/school-management-system/p8.webp",
      ],
      deployed: "https://school-management-app-rlxs.onrender.com",
    },
    {
      id: 3,
      title: "Cinema Application",
      desc: t("cinemaProjectDescription"),
      link: "https://github.com/vladyslavsoruk/CinemaHub",
      slideshow: [
        "/aspnet-cinema-app/p1.webp",
        "/aspnet-cinema-app/p2.webp",
        "/aspnet-cinema-app/p3.webp",
        "/aspnet-cinema-app/p4.webp",
        "/aspnet-cinema-app/p5.webp",
        "/aspnet-cinema-app/p6.webp",
        "/aspnet-cinema-app/p7.webp",
      ],
    },
    {
      id: 4,
      title: "Social Network Project",
      desc: t("xbookProjectDescription"),
      link: "https://github.com/Saxanda/xbook",
      slideshow: [
        "/social-network-app/p1.webp",
        "/social-network-app/p2.webp",
        "/social-network-app/p3.webp",
        "/social-network-app/p4.webp",
        "/social-network-app/p5.webp",
      ],
    },
  ];
};

const imagesVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const descVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();
  const isInView = useInView(ref, {
    amount: 0.5,
  });
  const { t } = useContext(LanguageContext);

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        className="pImg"
        variants={imagesVariants}
        initial="initial"
        animate={isInView ? "animate" : ""}
      >
        <PortfolioSlider portfolioImages={item.slideshow} />
      </motion.div>
      <motion.div
        className="pText"
        variants={descVariants}
        initial="initial"
        animate={isInView ? "animate" : ""}
      >
        <motion.h1 variants={descVariants}>{item.title}</motion.h1>
        <motion.p variants={descVariants}>{item.desc}</motion.p>
        <div className="pLinks">
          <motion.a
            variants={descVariants}
            href={item.link}
            target="_blank"
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { type: "spring", stiffness: 500 },
            }}
          >
            <button>{t("githubLink")}</button>
          </motion.a>
          {item.deployed && (
            <motion.a
              variants={descVariants}
              target="_blank"
              href={item.deployed}
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { type: "spring", stiffness: 500 },
              }}
            >
              <button>{t("liveDemoLink")}</button>
            </motion.a>
          )}
        </div>
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

  const items = portfoliosItems();

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
      <motion.div
        className="pList"
        style={{ x: translateX, willChange: "transform" }}
      >
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
      {/* <section
        style={{ scrollSnapAlign: "center", scrollSnapStop: "always" }}
      /> */}
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
