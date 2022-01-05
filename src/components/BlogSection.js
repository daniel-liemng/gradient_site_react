import styled from 'styled-components';

import MainTitle from './MainTitle';
import { SectionStyled } from '../utils/Layouts';
import { blogs } from '../data';
import BlogCard from './BlogCard';

const BlogSection = () => {
  return (
    <BlogSectionStyled>
      <SectionStyled>
        <div className='title-con'>
          <MainTitle
            title={'Popular Blogs'}
            subtitle={'Our Top Blogs'}
            para={
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas aspernatur ipsa laboriosam ratione provident ducimus animi autem unde esse.'
            }
          />
        </div>
        <div className='blogs'>
          {blogs.map((item) => (
            <div key={item.id}>
              <BlogCard blog={item} />
            </div>
          ))}
        </div>
      </SectionStyled>
    </BlogSectionStyled>
  );
};

const BlogSectionStyled = styled.div`
  .blogs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    padding-top: 2rem;
  }
`;

export default BlogSection;
