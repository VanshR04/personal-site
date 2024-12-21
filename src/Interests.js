import React from "react";
import { useInView } from 'react-intersection-observer';
import "./Interests.css";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


function Interests() {

    const { ref, inView } = useInView({
        triggerOnce: false, // Allow animation to repeat when scrolled back into view
        threshold: 0.2, // Trigger when 20% of the element is visible
    });

    return (
        <>
            <div ref={ref} className="intro-screen-i">
                {inView && (
                    <motion.div
                        className="intro-text-i"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <TypeAnimation
                            sequence={[
                                "Transforming Ideas with Machine Learning", 1500,
                            ]}
                            wrapper="h1"
                            speed={50}
                            repeat={Infinity} // Infinite loop
                        />
                    </motion.div>
                )}
            </div>
            <div className="interest">
                <p>
                    My passion for <strong>Machine Learning</strong> drives me to explore innovative solutions that solve real-world problems.
                    I am eager to <strong>collaborate</strong> with like-minded individuals, share ideas, and build groundbreaking projects
                    that make an impact. Together, let's turn curiosity into action and ideas into reality.
                </p>
            </div>
        </>
    );
}

export default Interests;
