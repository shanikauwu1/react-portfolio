import {useEffect,useState,createContext,useContext} from 'react';

 const ThemeContext =createContext();

 export const useTheme = () =>useContext(ThemeContext);

 export const ThemeProvider = ({children}) =>{

    const [theme ,setTheme] =useState(
        ()=> localStorage.getItem('theme'||'light')
    );

    useEffect( ()=>{
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem('theme',theme);
        },[theme] );

   const toggleTheme =()=>{
        setTheme((prevTheme)=>(prevTheme ==='light' ?'dark':'light'));
    }   
    
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );

 }

// function Theme() {
//   return (
//     <div>Theme</div>
//   )
// }

// export default Theme