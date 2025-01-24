import './Description.css';
import React from "react";
import { useInView } from 'react-intersection-observer';
import img from './img-description.jpg'
import Projects from './Projects';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import vansh from './Vansh.jpg'

function Description() {

    const { ref, inView } = useInView({
        triggerOnce: false, // Allow animation to repeat when scrolled back into view
        threshold: 0.2, // Trigger when 20% of the element is visible
      });

    const projects = [{
        image : require('./house.jpg'),
        name: 'House-Predictor-Model',
        description: 'A Machine Learning model to predict house prices of a few US cities. Uses Linear regression with self-made functions',
        link: 'https://github.com/VanshR04/ML-house-prediction-Regression-Sample',
        web : null
    },
    {   image : require('./meme.jpg'),
        name: 'React Meme-App',
        description: 'Creates memes with random generated images using an externam API and adding own text on top of the image',
        web: 'https://vansh-meme-app.onrender.com/',
        link : 'https://github.com/VanshR04/Meme-app'
    }, {
        image : require('./doubtnet.jpg'),
        name: 'Doubtnet',
        description: 'A full stack web application developed using MERN stack. Allows users to Signup/Login, add and delete doubts. Users can eve reply to other users doubts',
        web: 'https://doubtnet.onrender.com/',
        link : 'https://github.com/VanshR04/doubtnet-client'
    },
    {
        image : require('./bg.jpg'),
        name : 'Flight Tracker',
        description: 'A Flight Tracker application that allows users to track flights in real time using the flight number. Used AviationStack API for this build.',
        web : 'https://live-flight-status.onrender.com',
        link : 'https://github.com/VanshR04/live-flight-status'
    }
    ]

    return (<>
        <div className='all'>
            <div className='desc'>
            <div className='img'>
                    <img src={vansh} alt='Vansh Hackathon'></img>
                </div>
                <div className='description'>
                    I am Vansh Rastogi, a 3rd-year Computer Science student at the <strong>University of Manitoba</strong>.
                    I am passionate about <strong>machine learning</strong> and its ability to transform real-world problems
                    into actionable solutions. My journey includes working on basic machine learning projects where
                    I explored areas like data analysis, model building, and optimization. <br /><br />
                    In addition to machine learning, I have a solid understanding of <strong>full-stack development</strong>,
                    allowing me to build scalable and responsive web applications. I strive to combine my technical skills
                    with creative problem-solving to make a meaningful impact.
                </div>
            </div>
            <div ref={ref} className="intro-screen-c">
        {inView && (
          <motion.div
            className="intro-text-c"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1 }}
          >
            <TypeAnimation
              sequence={[
                "Projects", 1500,
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity} // Infinite loop
            />
          </motion.div>
        )}
      </div>
            <div className='projects'>
                {projects.map((project, index) => {
                    return (
                        <Projects project={project} key={index}/>
                    )
                })}
            </div>
        </div>
    </>
    );
}

export default Description;
