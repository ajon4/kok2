import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};

display: flex;
justify-content: center;
align-items: center;
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;
`
const Center = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`


const Footer = () => {
    return(
       <Section>
           <Container>
                <Center>
                    <span>
                        Made With &#10084; by <a href="https://instagram.com/nftwebe" target="_blank" rel="noopener noreferrer">
                        Webe
                        </a>
                    </span>
                </Center>
           </Container>
       </Section>
    );
};

export default Footer