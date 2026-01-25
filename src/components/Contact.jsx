import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaCheckCircle, FaExclamationCircle, FaSpinner } from 'react-icons/fa';

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
                        <a href="mailto:salamiqudus123@gmail.com" className="flex items-center gap-3 text-xl text-gray-300 hover:text-cyan-400 transition-colors">
                            <FaEnvelope /> salamiqudus123@gmail.com
                        </a>
                        <div className="flex gap-6">
                            <a href="https://github.com/Qudus12" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-white transition-colors"><FaGithub /></a>
                            <a href="https://linkedin.com/in/qudus-salami" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-blue-500 transition-colors"><FaLinkedin /></a>
                            <a href="https://X.com/Salamiqudus8" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-blue-400 transition-colors"><FaTwitter /></a>
                        </div>
                    </motion.div>

                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to send message');
            }

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border border-green-500/20 p-8 rounded-2xl text-center"
            >
                <div className="flex justify-center mb-4">
                    <FaCheckCircle className="text-5xl text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 transition-colors"
                >
                    Send another message
                </button>
            </motion.div>
        );
    }

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Name"
                        className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email"
                        className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
                    />
                </div>
            </div>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Message"
                rows="5"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
            />
            {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 bg-red-500/10 p-4 rounded-lg">
                    <FaExclamationCircle />
                    <span>Something went wrong. Please try again or email me directly.</span>
                </div>
            )}
            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-bold text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {status === 'loading' ? (
                    <>
                        <FaSpinner className="animate-spin" /> Sending...
                    </>
                ) : (
                    'Send Message'
                )}
            </button>
        </motion.form>
    );
};

export default Contact;
