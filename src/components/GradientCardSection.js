import styled from 'styled-components';
import { SectionStyled } from '../utils/Layouts';
import GradientCard from './GradientCard';
import MainTitle from './MainTitle';
import avatar from '../img/avata.jpg';
import person from '../img/person.jpg';
import CtaButton from './CtaButton';

const GradientCardSection = () => {
  return (
    <GradientCardSectionStyled>
      <SectionStyled>
        <div className='title-con'>
          <MainTitle
            title={'New Upcoming Items'}
            subtitle={'Discover Upcoming Items'}
            para={
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus autem quae dolorum similique et quod doloremque tempora porro quis nesciunt.'
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
          />
          <GradientCard
            image={person}
            avatar={avatar}
            name={'Joe John'}
            price={20}
            title={'Lorem Lorem Lorem 789'}
          />
          <GradientCard
            image={person}
            avatar={avatar}
            name={'Joe John'}
            price={20}
            title={'Lorem Lorem Lorem 789'}
          />
          <GradientCard
            image={person}
            avatar={avatar}
            name={'Joe John'}
            price={20}
            title={'Lorem Lorem Lorem 789'}
          />
        </div>
        <div className='btn-cta'>
          <CtaButton name={'View More'} />
        </div>
      </SectionStyled>
    </GradientCardSectionStyled>
  );
};

const GradientCardSectionStyled = styled.div``;

export default GradientCardSection;
