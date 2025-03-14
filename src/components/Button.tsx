import { useState } from "react";
import { motion } from "motion/react";

interface Props {
  children: string;
  color?: string;
}

function Button({ children, color = "primary" }: Props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <motion.div
        initial={{
          rotate: "0deg",
        }}
        animate={{
          rotate: "360deg",
        }}
        transition={{
          duration: 2,
        }}
      >
        <button className={"btn btn-" + color}>{children}</button>
      </motion.div>
    </>

    // <button
    //   className={"btn btn-" + color}
    //   onClick={() => {
    //     setCount(count + 1);
    //   }}
    // >
    //   {children}
    // </button>
  );
}

export default Button;
