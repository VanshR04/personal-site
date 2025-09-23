import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Top.css';

function Top({ toggleTheme }) {

    return (
        <div className="Top-main">
            <div className="Top-name">
                Vansh Rastogi
                <div className='occ'
                    suppressContentEditableWarning={true}>
                    MACHINE-LEARNING ENTHUSIAST
                </div>
            </div>
            <div className='icons'>
                <div className="icon">
                    <a href='https://github.com/VanshR04'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                <div className="icon">
                    <a href='https://www.linkedin.com/in/vansh-rastogi-2a4a97261/'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                <div className="icon">
                    <a href="mailto:rastogivansh2004@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
                <div className="icon">
                    <a href='https://www.instagram.com/vansh_r04/'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
                <div className="resume">
                    <a href="/Vansh_Resume.pdf" download="Vansh_Rastogi_Resume" class="btn">
                        Resume
                    </a>
                </div>
                {/* <button className="theme-toggle-button" onClick={toggleTheme}>
          🌙
        </button> */}
            </div>
        </div>
    );
}

export default Top;
