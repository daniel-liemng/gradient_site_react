import styled from 'styled-components';
import time from '../img/time.svg';
import heart from '../img/heart.svg';

const GradientCard = ({ image, avatar, name, price, title, ctaButton }) => {
  return (
    <GradientCardStyled>
      <div className='g-card'>
        <div className='inner-content'>
          <div className='image'>
            <img src={image} alt={title} />
            <div className='name'>
              <img src={avatar} alt={name} />
              <p>{name}</p>
            </div>
          </div>

          <div className='card-content'>
            <h6 className='card-name'>{title}</h6>
            <p>
              Price <span className='price'>{price}</span> &nbsp; &nbsp;{' '}
              <span className='l-text'>3 of 15</span>
            </p>
            <p>
              Highest Bid: &nbsp; <span className='price'>{price}</span>{' '}
            </p>
            <div className='duration'>
              <p>
                <img src={time} alt='time' /> 7 Hours Ago
              </p>
              <p>
                <img src={heart} alt='heart' /> 150 Likes
              </p>
            </div>

            <div className='cta-btn'>{ctaButton}</div>
          </div>
        </div>
      </div>
    </GradientCardStyled>
  );
};

const GradientCardStyled = styled.div`
  border-radius: 20px;
  font-size: 1rem;
  transition: all 0.4s ease-in-out;
  background: linear-gradient(90deg, #7f41db 0%, #022894 100%);
  animation: gradient 5s infinite;
    fill-mode;

  @keyframes gradient {
    0% {
      background: linear-gradient(90deg, #7f41db 0%, #022894 100%);
    }
    50% {
      background: linear-gradient(130deg, #eb3fa9 ,#395ff6 50%, #eb3fa9);
    }
    70% {
      background: linear-gradient(90deg, #7f41db 0%, #022894 100%);
    }
    100% {
      background: linear-gradient(130deg, #eb3fa9 ,#395ff6 50%, #eb3fa9);
    }
  }

  .g-card {
    margin: 0.2rem;
    .inner-content {
      background-color: #091026;
      padding: 0.8rem;
      border-radius: 20px;
      .image {
        width: 100%;
        position: relative;
        img:first-child {
          width: 100%;
          object-fit: cover;
          height: 300px;
          border-radius: 10px;
        }
        .name {
          position: absolute;
          left: 50%;
          bottom: -26px;
          border-radius: 50px;
          background-color: #03091f;
          display: flex;
          align-items: center;
          transform: translateX(-50%);
          width: 75%;
          padding: 0.5rem 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.8);
          img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 2rem;
          }
        }
      }
    }

    .card-content {
      padding-top: 3rem;
      .card-name {
        font-size: 1.3rem;
        font-weight: 500;
        padding-bottom: 0.6rem;
      }

      .price {
        color: #6bbe92;
      }

      .l-text {
        opacity: 0.5;
      }

      .duration {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px dashed rgba(255, 255, 255, 0.2);
        display: flex;
        justify-content: space-between;

        p {
          display: flex;
          align-items: center;
          img {
            object-fit: cover;
            width: 18px;
            margin-right: 0.6rem;
            align-items: center;
            justify-content: space-between;
          }
        }
      }
    }

    .cta-btn {
      width: 100%;
      a {
        margin: .6rem auto;
        width: 100%;
        text-align: center;
        display: inline-block;
      }
    }
  }
`;

export default GradientCard;
