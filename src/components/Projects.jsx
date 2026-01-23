import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with cart functionality, payment gateway integration, and admin dashboard.',
        tags: ['HTML', 'CSS', 'Tailwind', 'Javascript'],
        github: 'https://github.com/Qudus12/SweetHomes.git',
        live: 'https://sweet-homes-pink.vercel.app/',
        image: null, // Placeholder
    },
    {
        title: 'Task Management App',
        description: 'Drag-and-drop task board with real-time collaboration features and user authentication.',
        tags: ['React', 'Firebase', 'DnD Kit', 'Chakra UI'],
        github: '#',
        live: '#',
        image: null,
    },
    {
        title: 'Portfolio Website',
        description: 'My personal portfolio website built with modern technologies to showcase my work.',
        tags: ['Vite', 'React', 'Framer Motion.js'],
        github: '#',
        live: '#',
        image: null,
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-[#0a0a0a] text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                >
                    Selected Work.
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all group"
                        >
                            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                                <span className="text-gray-600 font-bold text-xl uppercase tracking-widest group-hover:text-gray-400 transition-colors">Project Preview</span>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-4 line-clamp-3 md:line-clamp-none">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-cyan-300 border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.github} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium">
                                        <FaGithub /> Code
                                    </a>
                                    <a href={project.live} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
