import { motion } from 'framer-motion';

const Logo = () => {
    return (
        <a href="#" className="flex items-center gap-2 group cursor-pointer">
            {/* Animated Icon */}
            <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                <svg
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                >
                    <motion.path
                        d="M25 5 L43 15 V35 L25 45 L7 35 V15 Z"
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 3
                        }}
                    />

                    <motion.path
                        d="M25 20 L32 24 V30 L25 34 L18 30 V24 Z"
                        fill="url(#gradient)"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]"
                    />

                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#A78BFA" /> {/* purple-400 */}
                            <stop offset="100%" stopColor="#22D3EE" /> {/* cyan-400 */}
                        </linearGradient>
                    </defs>
                </svg>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Text Logo */}
            <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
                    SweetHUB
                </span>
                <span className="text-[0.5rem] md:text-[0.6rem] text-gray-400 tracking-[0.2em] -mt-1 group-hover:text-cyan-400 transition-colors uppercase">
                    Portfolio
                </span>
            </div>
        </a>
    );
};

export default Logo;
