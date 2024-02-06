import React from 'react';
import styled from 'styled-components';
import { Layout } from '../../componets/Layout'
import { MyImage, MyLink } from '../../styles/styles';

function Home() {

  return (
    <Layout>
      <Container>
        <LogoBox>
          <MyImage src='./Logos/CompleteLogo_dark.png' alt='imagotipo' />
          <div className='secondarySubtitle'>Visualiza tus deseos. ¡Hazlos realidad!</div>
        </LogoBox>
        <ImagenBox>
            <MyImage src='./Images/Successful purchase-bro.png' alt='imagenHome' />
            <MyLink href='https://storyset.com/people' target='_blank' rel='noopener noreferrer'>People illustrations by Storyset</MyLink>
        </ImagenBox>
      </Container>
    </Layout>
  );
}

export default Home;

export const Container = styled.div`    
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
      
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 40%;

  @media screen and (max-width: 768px) {
    height: 30%;
    width: 100%;
  }
`;

export const ImagenBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40%;

  @media screen and (max-width: 768px) {
    height: 50%;
    width: 100%;
  }
`;