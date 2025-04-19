import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

function Speech() {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
    >
      <div className="bubble">
        {/* <TypeAnimation
          sequence={[
            1000,
            "Same substring at the start will only be typed out once, initially",
            1000,
            "Lorem ipsum dolor sit amet consectetur adipisicing.",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        /> */}
        <p className="bubble-text">
          I`m a 22-year-old Web Developer. I`ve been programming for{" "}
          <span>3</span> years. I like creating complex web applications and
          continuously learning new stuff.
        </p>
      </div>
      <div className="photo-container">
        <img src="/my-photo.png" alt="" />
      </div>
    </motion.div>
  );
}

export default Speech;
