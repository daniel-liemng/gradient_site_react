import styled from 'styled-components';

import SmallHeading from '../components/SmallHeading';

const MainTitle = ({ title, subtitle, para }) => {
  return (
    <MainTitleStyled>
      <SmallHeading title={subtitle} />
      <h2>{title}</h2>
      <p>{para}</p>
    </MainTitleStyled>
  );
};

const MainTitleStyled = styled.div`
  h2 {
    padding-top: 1rem;
    font-weight: 500;
  }
  p {
    padding: 1.2rem 0;
    padding: 0.5;
  }
`;

export default MainTitle;
