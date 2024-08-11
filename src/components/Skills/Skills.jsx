import './Skills.css';
import checkImg from '../../assets/checkmark-dark.svg';
import SkillsList from '../../common/SkillsList';

function Skills() {
  return (
    <> <section id='skills' className='container'>
        <h1 className='sectionTitle'>Skills</h1>

        <div className='skillContainer' alt='checkmark Icon'>
          <SkillsList src={checkImg} skill='Html' />
          <SkillsList src={checkImg} skill='CSS' />
          <SkillsList src={checkImg} skill='Javascript' />
          <SkillsList src={checkImg} skill='Node' />
          <SkillsList src={checkImg} skill='PHP' />
         </div> 
         <hr />
         <div className='skillContainer' alt='checkmark Icon'>
          <SkillsList src={checkImg} skill='Mysql' />
          <SkillsList src={checkImg} skill='Git' />
          <SkillsList src={checkImg} skill='Bootstrap' />
         </div>
         <hr />
         <div className='skillContainer' alt='checkmark Icon'>
          <SkillsList src={checkImg} skill='React' />
          <SkillsList src={checkImg} skill='Angular' />
          <SkillsList src={checkImg} skill='Vue' />
         </div>
         <hr />
    </section>
    
    </>
   
  )
}

export default Skills