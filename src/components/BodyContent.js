import styled from 'styled-components';

import { InnerLayout } from '../utils/Layouts';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';
import DemonstrationSection from './DemonstrationSection';
import GradientCardSection from './GradientCardSection';
import MainTitle from './MainTitle';
import SellerCard from './SellerCard';

const BodyContent = () => {
  return (
    <BodyContentStyled>
      <InnerLayout>
        <MainTitle
          title={'Top Sellers This Month'}
          subtitle={'All Entrepreneurs'}
        />
        <div className='sellercards'>
          <SellerCard />
          <SellerCard />
          <SellerCard />
        </div>
        <BlogSection />
        <GradientCardSection />
        <DemonstrationSection />
      </InnerLayout>
      <ContactSection />
      <footer>
        <p>Copyright | All Rights Reserved</p>
      </footer>
    </BodyContentStyled>
  );
};

const BodyContentStyled = styled.main`
  .sellercards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin: 2rem 0;
  }

  footer {
    text-align: center;
    display: flex;
    justify-content: center;

    padding: 1rem 0;
    background-color: #020a27;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    p {
      opacity: 0.7;
      align-items: center;
    }
  }
`;

export default BodyContent;
