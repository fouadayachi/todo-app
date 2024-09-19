import {FaMoon} from 'react-icons/fa';
import {FaSun} from 'react-icons/fa';


export default function Header({mode,changeMode}){
    return (
        <div className='header'>
            <h1>Where in the world?</h1>
            <div onClick={changeMode} className='mode'>
                {mode === "Dark" ? <FaMoon className='icon'/> : <FaSun className='icon'/>} 
                <span>{mode} Mode</span>
            </div>
        </div>
    )
}