import { ModeContext } from "./_app";
import { useContext } from "react";
import { Color } from "../constants";
import Link from "next/link";
import DemoButton from "../components/DemoButton";
import { four04 } from '../localization'
const Error404 = () =>{
    const modeContext = useContext(ModeContext)

    return (
        <div style={{height: '130%',marginBottom:'200px', overflow:'hidden', backgroundColor: modeContext.darkMode.isDark ? Color.dark : Color.whiteish ,display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center'}}>
            <img style={{maxHeight:'40em'}} src={modeContext.darkMode.isDark ? '/dark404.png': '/light404.png'}/>
            <Link href='/'><DemoButton title={four04.backToSafety(modeContext.langMode.isEng)}/></Link>
        </div>
    );
}

export default Error404;