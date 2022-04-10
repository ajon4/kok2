import React from 'react'
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Button from './Button';

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 90%;
color: ${props => props.theme.text};
align-self: flex-start;

@media (max-width: 48em){
    font-size: 3em;
    align-self: center;
    text-align: center;
}

span{
    text-transform: uppercase;
    font-family: "Akaya Telivigala", sans-serif;
}

.text-1{
    color: blue;
}
.text-2{
    color: orange;
}
.text-3{
    color: red;
}`;

const SubTitle = styled.h3`
font-size: ${(props) => props.theme.fontlg};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight: 600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;

@media (max-width: 40em){
    font-size: ${props => props.theme.fontmd};
}

@media (max-width: 48em){
    align-self: center;
    text-align: center;
}

`

const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;

@media (max-width: 48em){
    align-self: center;
    text-align: center;

    button{
        margin: 1.5rem auto;
    }
}

`

const TypeWriterText = () => {
    return(
        <>
        <Title>
        Discover New Meaningful Images
        <Typewriter
        options={{
            autoStart:true,
            loop:true,
        }}
  onInit={(typewriter) => {
    typewriter.typeString('<span class="text-1">NFT</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span class="text-2">WEBE.</span>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<span class="text-3">AMBIGUITY!</span>')
    .pauseFor(2000)
    .deleteAll()
    .start()
  }}
/>
        </Title>
        <SubTitle>obscurity until now.</SubTitle>
        <ButtonContainer>
        <Button text="Explore" link="https://opensea.io/webezaknft"/>
        </ButtonContainer>
        </>
    );
};

export default TypeWriterText
