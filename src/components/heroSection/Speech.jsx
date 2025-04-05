import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

function Speech() {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
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
        />
      </div>
      <img src="/man.png" alt="" />
    </motion.div>
  );
}

export default Speech;
