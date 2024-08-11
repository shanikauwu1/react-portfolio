
import './projects.css';
import project1 from '../../assets/viberr.png';
import project2 from '../../assets/fresh-burger.png';
import project3 from '../../assets/hipsster.png';
import project4 from '../../assets/fitlift.png';

import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <>
    <section id='projects' className='container'> 
        <h1 className='sectionTitle'>Projects</h1>
        <div className='projectContainer'>
         <ProjectCard src={project1}
          link='https://github.com/shanikauwu1/react-jobs'
          h3='viberr'
          p='React App'
          />
          
          <ProjectCard src={project2}
          link='https://github.com/shanikauwu1/react-jobs'
          h3='viberr'
          p='html App'
          />
          <ProjectCard src={project3}
          link='https://github.com/shanikauwu1/react-jobs'
          h3='viberr'
          p='game javascript and html'
          />
          <ProjectCard src={project4}
          link='https://github.com/shanikauwu1/react-jobs'
          h3='viberr'
          p='pharmacy App'
          />
       </div>
    </section>
    </>
    )
}

export default Projects