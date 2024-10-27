import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { DiMysql } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const floatingAnimation = {
  visible: {
    y: [0, -10, 0],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }
};

const Technologies = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={floatingAnimation}
          initial="hidden"
          animate={controls}
          ref={ref}
          whileHover={{ scale: 1.1 }}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <h1 className="text-center">React</h1>
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={floatingAnimation}
          initial="hidden"
          animate={controls}
          ref={ref}
          whileHover={{ scale: 1.1 }}
        >
          <TbBrandNextjs className="text-7xl" />
          <h1 className="text-center">Nextjs</h1>
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={floatingAnimation}
          initial="hidden"
          animate={controls}
          ref={ref}
          whileHover={{ scale: 1.1 }}
        >
          <SiMongodb className="text-7xl text-green-500" />
          <h1 className="text-center">MongoDb</h1>
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={floatingAnimation}
          initial="hidden"
          animate={controls}
          ref={ref}
          whileHover={{ scale: 1.1 }}
        >
          <FaNodeJs className="text-7xl text-green-400" />
          <h1 className="text-center">NodeJs</h1>
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={floatingAnimation}
          initial="hidden"
          animate={controls}
          ref={ref}
          whileHover={{ scale: 1.1 }}
        >
          <DiMysql className="text-7xl text-blue-500" />
          <h1 className="text-center">SQL</h1>
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={floatingAnimation}
          initial="hidden"
          animate={controls}
          ref={ref}
          whileHover={{ scale: 1.1 }}
        >
          <FaJava className="text-7xl text-red-700" />
          <h1 className="text-center">Java</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
