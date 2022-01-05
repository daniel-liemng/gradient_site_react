import styled from 'styled-components';

import { SectionStyled } from '../utils/Layouts';
import map from '../img/map.png';

const ContactSection = () => {
  return (
    <ContactSectionStyled>
      <SectionStyled>
        <div className='contact-info'>
          <h3 className='contact-title'>Contact Us</h3>
          <p> 30 Avenue Street, UK</p>
          <p>789 554 1555</p>
          <p>lkdku@gmail.com</p>
        </div>

        <div className='bg-image'>
          <img src={map} alt='map' />
        </div>
      </SectionStyled>
    </ContactSectionStyled>
  );
};

const ContactSectionStyled = styled.div`
  background-color: #020c31;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  padding: 4rem 0;
  z-index: 1;

  p {
    opacity: 0.5;
    margin: 0.4rem 0s;
  }

  .bg-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* z-index: -10; */

    img {
      width: 80%;
      height: 100%;
      opacity: 0.08;
    }
  }

  .contact-title {
    position: relative;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    font-weight: 500;
    font-size: 1.5rem;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 4rem;
      height: 2px;
      background-color: #eb3fa9;
    }
  }
`;

export default ContactSection;
