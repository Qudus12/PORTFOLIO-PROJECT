import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-[#0a0a0a] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent inline-block"
                >
                    About Me.
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-300 text-lg leading-relaxed space-y-6"
                    >
                        <p>
                            Hello! I'm a passionate Full Stack Developer with a knack for building robust and scalable web applications.
                            With expertise in modern technologies like React, Node.js, and TailwindCSS, I enjoy turning complex problems into simple, beautiful, and intuitive designs.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new tech trends, contributing to open-source, or refining my design skills.
                            I believe in continuous learning and always strive to deliver the best user experience.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Placeholder for Profile Image */}
                        <div className="w-full aspect-square bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="text-gray-500 text-sm tracking-widest uppercase">Profile Image</span>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-500 rounded-full blur-3xl opacity-20" />
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyan-500 rounded-full blur-3xl opacity-20" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
