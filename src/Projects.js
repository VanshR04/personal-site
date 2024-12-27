import './Projects.css'

function Projects({ project }) {

    return (
        <>
            <div className="outer-main">
                <div className='img-project'>
                    <img src={project.image} alt='Project-img'></img>
                </div>
                <div >
                    <div className='name'>{project.name}</div>
                </div>
                <div className='description'>
                    <p>{project.description}</p>
                </div>
                <div className='link'>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Project Link
                    </a>
                </div>
                {project.web != null && <div className='link'>
                    <a href={project.web} target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                </div>}
            </div>
        </>
    );
}

export default Projects;
