import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-[#0a0a0a] relative overflow-hidden px-4 sm:px-6 pt-32 md:pt-40">
            {/* Animated Background Gradients - Pulse & Move */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                    y: [0, -30, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, -40, 0],
                    y: [0, 40, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/30 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="z-10 text-center max-w-5xl relative w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 md:mb-12 flex justify-center"
                >
                    <span className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs sm:text-sm font-medium tracking-wide text-cyan-300 shadow-lg shadow-cyan-500/10 whitespace-nowrap">
                       HI👋, Available for new projects
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Crafting
                    </span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 animate-gradient-x bg-[length:200%_auto]">
                        Digital Magic.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-400 text-base sm:text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-light px-2"
                >
                    I'm a Full Stack Developer transforming complex requirements into <br className="hidden md:block" />
                    <span className="text-white font-normal hover:text-cyan-300 active:text-cyan-300 transition-colors cursor-default">stunning interfaces</span> and
                    <span className="text-white font-normal hover:text-purple-300 active:text-purple-300 transition-colors cursor-default"> robust architectures</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10 w-full sm:w-auto text-center">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shine" />
                        <span className="relative">Explore My Work</span>
                    </a>
                    <div className="flex gap-6 items-center">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-3xl hover:scale-110 transform duration-200"><FaGithub /></a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-3xl hover:scale-110 transform duration-200"><FaLinkedin /></a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <HiArrowDown className="text-xl" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
