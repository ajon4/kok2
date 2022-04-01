import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
min-height: 75vh;
width: 100vw;
background-color: ${props => props.theme.body};
justify-content: center;
align-items: center;
position: relative;
`
const Container = styled.div`
width: 75%;
margin: 7rem auto;
/* background-color: lightblue; */

display: flex;
justify-content: center;
align-items: center;
@media (max-width: 70em){
    width: 85%;
}


@media (max-width: 64em){
    width: 100%;
    flex-direction: column;

    &>*:last-child{
        width: 80%;
    }
}
`

const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em){
    min-height: 50vh;
    }
`
const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: uppercase;
color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;

border-bottom: 1px solid ${(props) => props.theme.carouselColor};
width: fit-content;
@media (max-width: 64em){
    width: 100%;
    text-align: center;
    }
    
@media (max-width: 40em){
    font-size: ${(props) => props.theme.fontxl};
}
@media (max-width: 30em){
    font-size: ${(props) => props.theme.fontxl};
}
`
const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.text};
align-self: flex-start;
width: 90%;
margin: 1rem auto;
font-weight: 400;
@media (max-width: 64em){
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
    }
    
@media (max-width: 40em){
    font-size: ${(props) => props.theme.fontmd};
}
@media (max-width: 30em){
    font-size: ${(props) => props.theme.fontsm};
}
`
const SubTextLight = styled.p`
font-size: ${props => props.theme.fontmd};
color: ${(props)=> `rgba(${props.theme.text},0.6)`};
align-self: flex-start;
width: 90%;
margin: 1rem auto;
font-weight: 400;
`

const Roadmap = () => {
    return(
       <Section>
           <Container>
               <Box>
                   <Title>
                   Roadmap.
                   </Title>
                   <SubText>
                    you will have access to the following:
                   </SubText>
                   <SubTextLight>
                   * Private discord channel for members
                   </SubTextLight>
                   <SubTextLight>
                   * Chance to be an extra in Jomas videos (through Zoom or in-person if on location)
                   </SubTextLight>
                   <SubTextLight>
                   * Early access to new YouTube videos
                   </SubTextLight>
                   <SubTextLight>
                   And more ...
                   </SubTextLight>
               </Box>
           </Container>
       </Section>
    );
};

export default Roadmap