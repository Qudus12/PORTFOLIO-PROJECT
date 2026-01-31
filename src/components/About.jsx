import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Counter = ({ from, to }) => {
    const nodeRef = useRef();
    const isInView = useInView(nodeRef, { once: true });

    // Create a motion value that can be animated
    const count = useSpring(from, { duration: 3000, bounce: 0.2 });

    useEffect(() => {
        if (isInView) {
            count.set(to);
        }
    }, [isInView, from, to, count]);

    // Update text content directly for performance
    useEffect(() => {
        const unsubscribe = count.on("change", (latest) => {
            if (nodeRef.current) {
                nodeRef.current.textContent = Math.round(latest);
            }
        });
        return unsubscribe;
    }, [count]);

    return <span ref={nodeRef} />;
};

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
                            I’m a <span className="text-white font-semibold">Full Stack Developer</span> focused on driving business growth through scalable technology.
                            I specialize in building high-performance applications that serve global audiences.
                        </p>
                        <p>
                            Whether it’s optimizing complex backend systems or crafting intuitive user experiences, I deliver solutions that align with strategic business goals.
                            My approach combines technical precision with a deep understanding of user needs to solve real-world problems.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 flex items-center">
                                    <Counter from={0} to={3} />+
                                </h3>
                                <p className="text-sm text-gray-400">Years Experience</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 flex items-center">
                                    <Counter from={0} to={20} />+
                                </h3>
                                <p className="text-sm text-gray-400">Projects Delivered</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Abstract Tech Visual (Code-based) */}
                        <div className="w-full aspect-square rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group shadow-2xl shadow-purple-500/10 bg-[#0f0f0f]">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 z-0" />

                            {/* Animated Grid Background */}
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                            {/* Central Glowing Core */}
                            <div className="relative w-32 h-32 md:w-48 md:h-48">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-4 rounded-full border border-purple-500/30"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-gradient-to-tr from-purple-500 to-cyan-500 rounded-lg blur-xl opacity-50 animate-pulse" />
                                    <svg viewBox="0 0 24 24" className="w-12 h-12 text-white relative z-10 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                                    </svg>
                                </div>
                            </div>

                            {/* Floating Particles */}
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-white/20 rounded-full"
                                    animate={{
                                        y: [0, -20, 0],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 3 + i,
                                        repeat: Infinity,
                                        delay: i * 0.5,
                                        ease: "easeInOut"
                                    }}
                                    style={{
                                        left: `${20 + i * 15}%`,
                                        top: `${30 + i * 10}%`
                                    }}
                                />
                            ))}
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500 rounded-full blur-[80px] opacity-20 animate-pulse" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500 rounded-full blur-[80px] opacity-20 animate-pulse" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
