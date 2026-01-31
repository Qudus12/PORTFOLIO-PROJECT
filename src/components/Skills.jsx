import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs } from 'react-icons/si';

const skills = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Database', icon: FaDatabase, color: '#4DB33D' }, // Generic DB icon
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-[#0a0a0a] text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                >
                    Tech Stack.
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all group"
                        >
                            <skill.icon className="text-5xl mb-4 transition-colors group-hover:text-cyan-400" style={{ color: skill.color }} />
                            <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
