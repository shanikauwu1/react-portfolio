

function SkillsList({src, skill}) {
  return (
   <>
    <span>
         <img src ={src}/>
         <p>{skill}</p>
     </span>
   </>
  )
}

export default SkillsList