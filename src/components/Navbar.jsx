import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const links = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const menuVariants = {
        closed: {
            x: '100%',
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const linkVariants = {
        closed: { x: -20, opacity: 0 },
        open: { x: 0, opacity: 1 }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center relative z-50">
                <Logo />

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium relative group"
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white text-3xl focus:outline-none hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(true)}
                >
                    <HiMenuAlt3 />
                </button>
            </div>

            {/* Mobile Side Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="fixed top-0 right-0 h-full w-[85%] max-w-md bg-zinc-900 z-[70] border-l border-white/10 shadow-2xl p-8 flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-16">
                                <span className="text-xl font-bold text-white/90">Menu</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
                                >
                                    <HiX className="text-2xl" />
                                </button>
                            </div>

                            <div className="flex flex-col space-y-2">
                                {links.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        variants={linkVariants}
                                        onClick={() => setIsOpen(false)}
                                        className="text-3xl font-medium text-gray-400 hover:text-white hover:pl-4 transition-all duration-300 py-3"
                                    >
                                        <span className="bg-gradient-to-r from-transparent to-transparent group-hover:from-purple-400 group-hover:to-cyan-400 bg-clip-text">
                                            {link.name}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>

                            <motion.div
                                variants={linkVariants}
                                className="mt-auto pt-8 border-t border-white/10"
                            >
                                <p className="text-gray-500 text-sm mb-4 uppercase tracking-wider">Connect with me</p>
                                <div className="flex gap-6">
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl"><FaGithub /></a>
                                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"><FaLinkedin /></a>
                                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl"><FaTwitter /></a>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
