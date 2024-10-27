import aboutImg from "../assets/assets/about.jpg";
import { ABOUT_TEXT } from "../constants/index.js";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

function About() {
  const headerControls = useAnimation();
  const imageControls = useAnimation();
  const textControls = useAnimation();

  const [headerRef, headerInView] = useInView({ triggerOnce: false });
  const [imageRef, imageInView] = useInView({ triggerOnce: false });
  const [textRef, textInView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (headerInView) {
      headerControls.start("visible");
    } else {
      headerControls.start("hidden");
    }
  }, [headerControls, headerInView]);

  useEffect(() => {
    if (imageInView) {
      imageControls.start("visible");
    } else {
      imageControls.start("hidden");
    }
  }, [imageControls, imageInView]);

  useEffect(() => {
    if (textInView) {
      textControls.start("visible");
    } else {
      textControls.start("hidden");
    }
  }, [textControls, textInView]);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        className="my-20 text-center text-4xl"
        variants={headerVariants}
        initial="hidden"
        animate={headerControls}
        ref={headerRef}
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex item-center justify-center">
            <motion.img
              className="rounded-2xl"
              src={aboutImg}
              alt="About"
              variants={imageVariants}
              initial="hidden"
              animate={imageControls}
              ref={imageRef}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              className="my-2 max-w-xl py-6"
              variants={textVariants}
              initial="hidden"
              animate={textControls}
              ref={textRef}
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
