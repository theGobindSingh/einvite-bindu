import styled from '@emotion/styled';

export const HomeWrapper = styled.div`
  background: url('/assets/images/bg.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const HomeContainer = styled.div`
  position: relative;
  height: 67.5%;
  width: 50%;
  top: 3%;
  width: 100%;
  border-radius: 50% 50% 10% 10%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow:
    inset 0 30px 30px rgba(247, 247, 247, 1),
    inset 0 -30px 30px rgba(247, 247, 247, 1);
`;

export const TopCurveContainer = styled.div`
  position: absolute;
  height: 35%;
  width: 100%;
  top: 5%;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const TopCurveTextElem = styled.span`
  height: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transform-origin: bottom center;
  font-weight: 600;
`;

export const HomeHeading = styled.span`
  font-family: var(--font-display);
  font-size: 3rem;
  margin-top: 1.75em;
  text-align: center;
  margin-bottom: 0;
  line-height: 1em;
`;

export const HomeTitle = styled.h1`
  font-family: var(--font-cursive);
  font-weight: 400;
  margin: 0;
  font-size: 2.5rem;
`;

export const HomeMiddleText = styled.span`
  margin: 1.25rem 0;
`;

export const HomeBottomText = styled.a`
  font-family: var(--font-mono);
  font-weight: 500;
  text-align: center;
  margin: 1.5rem 0 0 0;
  font-size: 0.875rem;
  text-decoration: none;
  font-style: italic;
  color: inherit;
`;

export const HomeImageContainer = styled.div`
  opacity: 0.5;
  height: 40px;
  width: 40px;
`;
