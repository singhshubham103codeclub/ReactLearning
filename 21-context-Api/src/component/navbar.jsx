import { useContext } from "react";
import Nav2 from "./navbar2";
import { ThemeDataContext } from "../context/Themecontext";
const Navbar=(props)=>{
    const data=useContext(ThemeDataContext)
    console.log(props)
    console.log(data)
    return (
        <div className='Nav'>
            <Nav2 theme={props.theme}/>
            <h1>{data}</h1>
        </div>
    )
}
export default Navbar
