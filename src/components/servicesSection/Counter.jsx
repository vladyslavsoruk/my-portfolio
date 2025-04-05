import { animate } from "motion";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

function Counter({ from, to, text }) {
  const [count, setCount] = useState(from);
  // const timeInterval = Math.round(3_000 / (to - from));
  const ref = useRef();
  const isInView = useInView(ref);

  useEffect(() => {
    const animation = animate(from, to, {
      duration: 4,
      ease: "easeOut",
      onUpdate: (prev) => {
        setCount(Math.floor(prev));
      },
    });
    return () => animation.cancel();
  }, [isInView, from, to]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((prev) => {
  //       if (prev >= to) {
  //         clearInterval(interval);
  //         return prev;
  //       }
  //       return prev + 1;
  //     });
  //   }, timeInterval);
  //   return () => clearInterval(interval);
  // }, [count]);
  return (
    <div className="counter" ref={ref}>
      <h1>{count + "+"}</h1>
      <p>{text}</p>
    </div>
  );
}

export default Counter;
