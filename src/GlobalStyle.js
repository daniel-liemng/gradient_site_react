import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
  }

  body {
    background-color: #03091f;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;

    /* Change styles for scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: #ccc;
    }

    ::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #7F41DB 0%, #022894 100%);
      border-radius: 24px;
    }
    
  }

  a {
    color: inherit;
    font-family: inherit;
    text-decoration: none;
  }

  p {
    line-height: 2rem;
  }

  .Before {
    position: relative;
    padding-left: 3rem;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 35px;
      height: 2px;
      background-color: #395ff6;
    }
  }

  .GradientText {
    /* Code block to hide the text from gradient background -> get the gradient text */
     background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    display: inline-block;
  }

  .title-con {
    text-align: center;
    width: 50%;
    margin: 0 auto;
  }

  .gradient-cards-con {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
  }

  .btn-cta {
    padding-top: 3rem;
    text-align: center;

    /* margin: 3rem auto;
    display: flex;
    justify-content: center; */
  }
`;

export default GlobalStyle;
