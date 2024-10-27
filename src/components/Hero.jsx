
import { HERO_CONTENT } from "../constants/index.js";
import profilepic from "../assets/assets/Vivekprofile.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const subtitleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const Hero = () => {
  const headerControls = useAnimation();
  const subtitleControls = useAnimation();
  const textControls = useAnimation();
  const imageControls = useAnimation();

  const [headerRef, headerInView] = useInView({ triggerOnce: false });
  const [subtitleRef, subtitleInView] = useInView({ triggerOnce: false });
  const [textRef, textInView] = useInView({ triggerOnce: false });
  const [imageRef, imageInView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (headerInView) {
      headerControls.start("visible");
    } else {
      headerControls.start("hidden");
    }
  }, [headerControls, headerInView]);

  useEffect(() => {
    if (subtitleInView) {
      subtitleControls.start("visible");
    } else {
      subtitleControls.start("hidden");
    }
  }, [subtitleControls, subtitleInView]);

  useEffect(() => {
    if (textInView) {
      textControls.start("visible");
    } else {
      textControls.start("hidden");
    }
  }, [textControls, textInView]);

  useEffect(() => {
    if (imageInView) {
      imageControls.start("visible");
    } else {
      imageControls.start("hidden");
    }
  }, [imageControls, imageInView]);

  const words = HERO_CONTENT.split(" ");

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
              variants={headerVariants}
              initial="hidden"
              animate={headerControls}
              ref={headerRef}
            >
              Vivek Singh
            </motion.h1>
            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
              variants={subtitleVariants}
              initial="hidden"
              animate={subtitleControls}
              ref={subtitleRef}
            >
              Full Stack Developer
            </motion.span>
            <motion.div
              className="my-2 max-w-xl py-6 font-light tracking-tighter flex flex-wrap"
              variants={containerVariants}
              initial="hidden"
              animate={textControls}
              ref={textRef}
            >
              {words.map((word, index) => (
                <motion.span key={index} variants={textVariants} className="mr-1">
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              src={profilepic}
              alt="Profile picture of Vivek Singh"
              className="rounded-full w-1/2 lg:w-3/4"
              variants={imageVariants}
              initial="hidden"
              animate={imageControls}
              ref={imageRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
