import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 69vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>
<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
<Design width={40} height={40} /> Business Analyst
</Title>
<Description>
"I specialize in Business analysis, process improvement, and delivering strategic insights to drive business growth and support informed decision-making."
</Description>
<Description>
<strong>SKILLS</strong>
<ul>
    <li>
        Data visulation
    </li>
    <li>
        power BI
    </li><li>
        SQL
    </li>
    <li>
        Tableau
    </li>
    <li>
        Stakholder Requirements
    </li>
</ul>
</Description>

            </Main>
            <Main>
<Title>
    <Develope width={40} height={40} /> Deputy Manager
</Title>
<Description>
Engaged with customers regularly as per contact policy to deliver a consistent and superior digital banking experience.
</Description>
<Description>
<strong>Skills</strong>
<p>
Strengthened customer relationships through proactive communication and support.
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
CRM, FLEXCUBE,KHOJ.etc
</p>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="60%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
