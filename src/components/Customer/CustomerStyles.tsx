import styled from 'styled-components';

export const CustomerCard = styled.div`
  & {
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: rgba(75, 75, 75, 0.3) 0px 7px 29px 0px;
    border-radius: 1rem;
    width: 600px;
    height: 100px;
    margin: 1rem;
    padding: .5rem;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform .3s ease-out;
    @media only screen and (max-width: 650px) {
      width: 100%;
      height: 125px;
    }
  }

  &:hover {
    transform: scale(1.025);
    @media only screen and (max-width: 600px) {
      transform: none;
    }
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #333;
`;

export const Name = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const ProfilePicture = styled.img`
  height: 75px;
  width: 75px;
  padding: 12.5px;
  border-radius: 50px;
`;

export const ExpectedTime = styled.h3`
  font-size: 14px;
  color: #555;
  font-weight: normal;
`;

export const Content = styled.div`
  padding-left: 1em;
  padding-right: 1em;
`;

export const DateFrom = styled.span`
  color: #f80447;
`;
