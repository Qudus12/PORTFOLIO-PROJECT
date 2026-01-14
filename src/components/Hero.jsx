import { motion } from 'framer-motion';
import { BiFontSize } from 'react-icons/bi';

const Hero = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center bg-[#0a0a0a] relative overflow-hidden px-6">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px]" />

            <div className="z-10 text-center max-w-4xl">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-cyan-400 tracking-[0.2em] uppercase text-2xl font-semibold mb-4"
                >
                    Full Stack Developer
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6 whitespace-tight"
                >
                    Building Digital <br className="hidden md:block" /> Experiences.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    I craft accessible, pixel-perfect, and performant web applications with modern technologies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <a href="#projects" className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
                        View Projects
                    </a>
                    <a href="#contact" className="px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
