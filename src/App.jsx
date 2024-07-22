// FileName: App.js 

import styled from "styled-components"; 
import Track from "./components/track"; 
import Styles from "./components/style"; 

const Main = styled.div` 
display: flex; 
justify-content: center; 
align-items: center; 
`; 

const App = () => { 
return ( 
	<Main> 
	<Styles /> 
	<Track /> 
	</Main> 
) 
} 

export default App


