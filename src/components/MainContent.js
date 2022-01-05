import styled from 'styled-components';
import Navigation from './Navigation';
import SmallHeading from './SmallHeading';
import blockchain from '../img/bchain.png';
import CtaButton from './CtaButton';

const MainContent = () => {
  return (
    <MainContentStyled>
      <Navigation />
      <div className='content'>
        <div className='left'>
          <SmallHeading
            title='All Digital Currencies in One Place'
            identifier={'Before'}
          />
          <h1>
            All NFTs You need in One Marketplace The Best Place to Collect, Buy
            and Sell <span className='GradientText'>Awesome NFTs</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum hic
            beatae voluptatum tempore dicta consectetur nemo, iusto id amet
            itaque incidunt quisquam maxime officia eius accusantium aperiam
            voluptates? Consequatur odio, aliquid cumque ullam velit voluptates
            eveniet officia in?
          </p>
          <div className='btn-group'>
            <CtaButton name='discover more' />
            <CtaButton name='get help' />
          </div>
        </div>
        <div className='right'>
          <img src={blockchain} alt='rightPhoto' />
        </div>
      </div>
    </MainContentStyled>
  );
};

const MainContentStyled = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 80%;
  height: 100%;
  transform: translateX(-50%);

  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    width: 100%;

    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        padding: 1.8rem 0;
      }

      .btn-group {
        margin-top: 2rem;
      }
    }

    .right {
      img {
        position: absolute;
        right: -11%;
        bottom: -1%;
        width: 60%;
      }
    }
  }
`;

export default MainContent;
