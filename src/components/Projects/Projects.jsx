
import './projects.css';
import project1 from '../../assets/viberr.png'

function Projects() {
  return (
    <>
    <section id='projects' className='container'> 
        <h1>Projects</h1>
        <div className='projectContainer'>
          <a href='https://github.com/shanikauwu1/react-jobs' target='_blank'>
          <img className='hover' src={project1} alt='Project one ' />

          </a>

        </div>
    </section>
    </>
    )
}

export default Projects