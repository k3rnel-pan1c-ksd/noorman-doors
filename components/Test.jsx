import styled from 'styled-components'
import { useContext } from 'react';
import { DarkModeContext } from '../pages/_app';

// const Test = styled.button`
//   background: ${props => props.theme.bg};
//   color: ${props => props.theme.fontColor};
// `
const Test = () => {
    const darkModeContext = useContext(DarkModeContext)
    
    return(
        <button style={{backgroundColor: darkModeContext.isDark ? 'brown' : 'yellow'}} onClick={()=>darkModeContext.darkModeDispatch('toggle')}>Change</button>
    )
}


export default Test