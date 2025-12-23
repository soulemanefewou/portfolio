import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, margin: "-50px" }}
          custom={index}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          {/* Image du projet */}
          <div className="relative overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              variants={imageVariants}
            />
            <motion.div
              className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
              variants={overlayVariants}
              initial="hidden"
              whileHover="hover"
            >
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </motion.div>
    
            <motion.span
              className="absolute top-3 left-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              {project.category}
            </motion.span>
          </div>
    
          {/* Contenu */}
          <motion.div
            className="p-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-500 transition-colors"
            >
              {project.title}
            </motion.h3>
    
            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed"
            >
              {project.description}
            </motion.p>
    
            {/* Technologies */}
            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              variants={itemVariants}
            >
              {project.technologies.map((tech, techIndex) => (
                tech.startsWith('/') ? (
                  <motion.div
                    key={techIndex}
                    className="relative group"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <img
                      src={tech}
                      alt={tech.split('/').pop().split('.')[0]}
                      className="w-8 h-8 object-contain"
                      title={tech.split('/').pop().split('.')[0]}
                    />
                  </motion.div>
                ) : (
                  <motion.span
                    key={techIndex}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgb(16, 185, 129)",
                      color: "white"
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {tech}
                  </motion.span>
                )
              ))}
            </motion.div>
    
            {/* Boutons */}
            <motion.div
              className="flex gap-3"
              variants={itemVariants}
            >
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-blue-600 text-white text-center py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-medium"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                Voir le projet
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-center py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-medium"
                whileHover={{
                  scale: 1.05,
                  borderColor: "#10b981"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                Code
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
  );
};

export default ProjectCard;
