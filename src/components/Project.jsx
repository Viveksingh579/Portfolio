import { PROJECTS } from "../constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

const floatingAnimation = {
  hidden: { y: 0 },
  visible: {
    y: [0, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const imageHoverVariants = {
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

const Project = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-4xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className={`rounded-lg border border-neutral-800 bg-neutral-900 p-4 shadow-lg ${
              project.githubLink ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'
            }`}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            whileHover="hover"
            ref={ref}
          >
            {project.githubLink ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  className="relative w-full h-48"
                  variants={floatingAnimation}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-md"
                    variants={imageHoverVariants}
                  />
                </motion.div>
                <div className="mt-4">
                  <h2 className="text-2xl font-semibold">{project.title}</h2>
                  <p className="mt-2 text-sm text-neutral-400">{project.description}</p>
                  <div className="mt-4">
                    <h3 className="font-semibold">Technologies:</h3>
                    <ul className="list-disc list-inside text-sm text-neutral-300">
                      {project.technologies.map((tech, techIndex) => (
                        <li key={techIndex}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </a>
            ) : (
              <div>
                <motion.div
                  className="relative w-full h-48"
                  variants={floatingAnimation}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-md"
                    variants={imageHoverVariants}
                  />
                </motion.div>
                <div className="mt-4">
                  <h2 className="text-2xl font-semibold">{project.title}</h2>
                  <p className="mt-2 text-sm text-neutral-400">{project.description}</p>
                  <div className="mt-4">
                    <h3 className="font-semibold">Technologies:</h3>
                    <ul className="list-disc list-inside text-sm text-neutral-300">
                      {project.technologies.map((tech, techIndex) => (
                        <li key={techIndex}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-red-500">GitHub link not available</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;


