import styled from 'styled-components';

import logo from '../img/heart.svg';
import { navItems } from '../data';

const Navigation = () => {
  console.log(navItems);
  return (
    <NavigationStyled>
      <div className='logo'>
        <img src={logo} alt='logo.svg' />
      </div>

      <ul className='nav-items'>
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
        <div className='primary-btn'>GET CONNECTED</div>
      </ul>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav-items {
    display: flex;
    align-items: center;
    li {
      margin: 0 1rem;
    }
    .primary-btn {
      margin-left: 3rem;
      background-color: rgba(57, 95, 246, 0.6);
      padding: 0.6rem 0.8rem;
      border-radius: 70px;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
    }
  }
`;

export default Navigation;
