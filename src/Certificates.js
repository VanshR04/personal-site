import React from "react";
import { useInView } from 'react-intersection-observer';
import "./Certificates.css";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


function Certificates() {

    const { ref, inView } = useInView({
        triggerOnce: false, // Allow animation to repeat when scrolled back into view
        threshold: 0.2, // Trigger when 20% of the element is visible
    });

    const cert = [{
        name : "Advanced Learning Algorithms",
        inst : "DeepLearning.AI, Stanford University",
        iss : "June 2024",
        link : "https://www.coursera.org/account/accomplishments/verify/VXD3PKCRU4K3",
        img : require("./img-1.jpg")
    },
{
    name : "Supervised Machine Learning: Regression and Classification",
    inst : "DeepLearning.AI, Stanford University",
    iss : "May 2024",
    link : "https://www.coursera.org/account/accomplishments/verify/LLN8MT2PZ4KZ",
    img : require("./img-2.jpg")
}]

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
                                "Certifications", 1500,
                            ]}
                            wrapper="h1"
                            speed={50}
                            repeat={Infinity} // Infinite loop
                        />
                    </motion.div>
                )}
            </div>
            <div className="certificates">
                {cert.map((certi) => {
                    return (
                        <>
                        <div className="outer">
                            <div className="img-c">
                                <img src={certi.img} alt={certi.name} />
                            </div>
                            <div className="inner">
                            <div className="name">
                                <h2>{certi.name}</h2>
                            </div>
                            <div className="inst">
                                <p>{certi.inst}</p>
                            </div>
                            <div className="iss">
                                <p>{certi.iss}</p>
                            </div>
                            <button className="cred">
                                <a href={certi.link} target="_blank" rel="noopener noreferrer">
                                    Credentials
                                </a>
                            </button>
                            </div>
                        </div>
                        </>
                    )
                })}
            </div>
        </>
    );
}

export default Certificates;
