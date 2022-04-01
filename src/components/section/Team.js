import React from 'react'
import styled from 'styled-components';

import img1 from '../../assets/Nfts/bighead-1.svg';

const Section = styled.section`
min-height: 75vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
`

const Title = styled.h1`
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
`;

const Container = styled.div`
width: 75%;
margin: 1rem auto;

display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`
const Item = styled.div`
width: calc(24rem - 8vw);
padding: 1rem 0;
color: ${props => props.theme.text};
margin: 2rem 1rem;
position: relative;

border: 2px solid ${props => props.theme.text};
border-radius: 33px;

&:hover{
    img{
        transform: translateY(-0.5rem)scale(1);
    }
}
`

const ImageContainer = styled.div`
width: 80%;
background-color: ${props => props.theme.carouselColor};
margin: 0 auto;
border: 1px solid ${props => props.theme.text};

border-radius: 20px;
cursor: pointer;

img{
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
}
`

const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
`

const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.body},0.9)`};
font-weight: 400;
`
const MemberComponent = ({img, name=" ",position=" "}) => {

    return(
        <Item>
            <ImageContainer>
                <img src={img} alt={name} />
            </ImageContainer>
        <Name>{name}</Name>
        <Position>{position}</Position>
        </Item>
    )
}


const Team = () => {
    return(
        <Section>
            <Title>Team.</Title>
            <Container>
                <MemberComponent img={img1} name="Zak" position="founder"/>
            </Container>
        </Section>
    );
};

export default Team