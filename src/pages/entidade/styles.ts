import styled from "styled-components";

interface EntityImageContainerProps {
  img: string;
}

export const EntityContainer = styled.div`
  @media (min-width: 768px) {
    padding: 0 2rem 2rem;
    max-width: 1120px;
    margin: 2rem auto 0;
  }
`;

export const EntityImageContainer = styled.div<EntityImageContainerProps>`
  @media (min-width: 768px) {
    position: relative;
    overflow: hidden;
    height: 400px;

    background-image: ${({ img }) => `url(${img})`};
    background-size: cover;
    background-position: center;

    border-radius: 1rem;

    &::before {
      content: "";
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;

export const EntityImage = styled.img`
  width: 100%;
  height: 240px;

  object-fit: cover;

  @media (min-width: 768px) {
    height: 100%;
    width: 800px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 1rem;
  }
`;

export const EntityContent = styled.div`
  @media (max-width: 767px) {
    padding: 0 2rem 2rem;
    max-width: 1120px;
    margin: 1rem auto 0;
  }

  @media (min-width: 768px) {
    margin-top: 2rem;
  }
`;

export const EntityInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  strong {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 2rem;
  }

  .wrapper {
    display: flex;
    align-items: center;

    span {
      color: ${({ theme }) => theme.colors.gray[200]};
    }

    span:first-child::after {
      content: "•";
      margin: 0 0.25rem;
    }
  }
`;

export const AboutTheEntity = styled.div`
  margin-top: 2rem;

  p {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const EntityEventsContainer = styled.div`
  margin-top: 2rem;
`;
