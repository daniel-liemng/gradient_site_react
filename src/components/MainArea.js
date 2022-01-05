import styled from 'styled-components';

import business from '../img/marketing.mp4';
import circles from '../img/circles.svg';
import { InnerLayout } from '../utils/Layouts';
import MainContent from './MainContent';

const MainArea = () => {
  return (
    <MainAreaStyled>
      <video src={business} muted playsInline autoPlay loop></video>
      <img src={circles} alt='overlay' className='overlay' />

      <InnerLayout>
        <MainContent />
      </InnerLayout>
    </MainAreaStyled>
  );
};

const MainAreaStyled = styled.div`
  width: 100%;
  height: 85vh;
  position: relative;
  overflow: hidden;

  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -300px;
    right: -400px;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
`;

export default MainArea;
