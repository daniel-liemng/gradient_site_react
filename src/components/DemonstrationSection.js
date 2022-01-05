import styled from 'styled-components';

import GradientCard from './GradientCard';
import { SectionStyled } from '../utils/Layouts';
import MainTitle from './MainTitle';
import avatar from '../img/avata.jpg';
import person from '../img/person.jpg';
import CtaButton from './CtaButton';

const DemonstrationSection = () => {
  const ctaButton = <CtaButton name={'Place Bid'} />;
  return (
    <DemonstrationSectionStyled>
      <SectionStyled>
        <div className='title-con'>
          <MainTitle
            title={'Live Demonstration'}
            subtitle={'Live Demonstration'}
            para={
              'lorem loremloremloremloremloremloremloremloremloremloremlorem'
            }
          />
        </div>
        <div className='gradient-cards-con'>
          <GradientCard
            image={person}
            avatar={avatar}
            name={'Joe John'}
            price={20}
            title={'Lorem Lorem Lorem 789'}
            ctaButton={ctaButton}
          />
          <GradientCard
            image={person}
            avatar={avatar}
            name={'Joe John'}
            price={20}
            title={'Lorem Lorem Lorem 789'}
            ctaButton={ctaButton}
          />
          <GradientCard
            image={person}
            avatar={avatar}
            name={'Joe John'}
            price={20}
            title={'Lorem Lorem Lorem 789'}
            ctaButton={ctaButton}
          />
          <GradientCard
            image={person}
            avatar={avatar}
            name={'Joe John'}
            price={20}
            title={'Lorem Lorem Lorem 789'}
            ctaButton={ctaButton}
          />
        </div>
      </SectionStyled>
    </DemonstrationSectionStyled>
  );
};

const DemonstrationSectionStyled = styled.div``;

export default DemonstrationSection;
