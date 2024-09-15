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
  max-width: 435px;
  &::-webkit-scrollbar {
    display: none;
  }
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
  margin: 0;
`;

export const HomeBottomText = styled.a`
  font-family: var(--font-mono);
  font-weight: 500;
  text-align: center;
  margin: 0;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 20px;
  margin-bottom: 2rem;
  .input {
    padding: 6px 8px;
    &:focus {
      border: 1px solid var(--color-primary-dark);
      outline: 0;
    }
  }
`;

export const FormUpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  .input {
    border: 1px solid var(--color-primary);
    border-radius: 5px;
  }
`;

export const FormLowerContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  row-gap: 8px;
  grid-template-areas:
    't1 t2'
    'b1 b2';
  .label.adult {
    grid-area: t1;
  }
  .label.child {
    grid-area: t2;
  }
  .input {
    width: 100%;
    border: 1px solid var(--color-primary);
    border-radius: 5px;
    &.adult {
      grid-area: b1;
    }
    &.child {
      grid-area: b2;
    }
  }
`;

export const FormButton = styled.button`
  width: 100%;
  padding: 6px 8px;
  background: var(--color-primary-light);
  border: 1px solid var(--color-primary);
  border-radius: 5px;
`;

export const HomeLander = styled.div`
  height: 57.5dvh;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
`;

export const FullScreenText = styled.div`
  height: 100dvh;
  width: 100dvw;
  background-color: black;
  color: white;
  position: fixed;
  padding: 0 20vw;
  display: none;
  z-index: 999;
  place-items: center;
  @media (min-width: 650px) {
    display: grid;
  }
`;
