import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-[#0a0a0a] text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                >
                    Get in Touch.
                </motion.h2>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-12 justify-center items-center mb-16"
                    >
                        <a href="mailto:email@example.com" className="flex items-center gap-3 text-xl text-gray-300 hover:text-cyan-400 transition-colors">
                            <FaEnvelope /> email@example.com
                        </a>
                        <div className="flex gap-6">
                            <a href="#" className="text-3xl text-gray-400 hover:text-white transition-colors"><FaGithub /></a>
                            <a href="#" className="text-3xl text-gray-400 hover:text-blue-500 transition-colors"><FaLinkedin /></a>
                            <a href="#" className="text-3xl text-gray-400 hover:text-blue-400 transition-colors"><FaTwitter /></a>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Name" className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500" />
                            <input type="email" placeholder="Email" className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500" />
                        </div>
                        <textarea placeholder="Message" rows="5" className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500" />
                        <button type="submit" className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-bold text-white hover:opacity-90 transition-opacity">
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
