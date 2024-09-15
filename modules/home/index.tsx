import MyCustomGForm from '@modules/home/form';
import {
  HomeBottomText,
  HomeContainer,
  HomeHeading,
  HomeImageContainer,
  HomeMiddleText,
  HomeTitle,
  HomeWrapper,
  TopCurveContainer,
  TopCurveTextElem,
} from '@modules/home/styles';
import { HomeProps } from '@modules/home/types';
import Image from 'next/image';

function TopCurvedText({ text = '' }: { text: string }) {
  const mapper = (char: string, index: number) => {
    const upperTransform = `rotate(${-45 + (90 / (text.length - 1)) * index}deg)`;
    return (
      <TopCurveTextElem
        key={`top-curve-text-${index}`}
        css={{
          transform: upperTransform,
        }}
      >
        {char}
      </TopCurveTextElem>
    );
  };
  return <TopCurveContainer>{text.split('').map(mapper)}</TopCurveContainer>;
}

export default function Home({ className }: HomeProps) {
  return (
    <HomeWrapper className={className}>
      <HomeContainer>
        <TopCurvedText text="Please join us for a" />
        <HomeHeading>
          Baby <br />
          Shower
        </HomeHeading>
        <HomeMiddleText>Celebrating</HomeMiddleText>
        <HomeTitle>Bindu & Sumanth</HomeTitle>
        <HomeBottomText
          target="_blank"
          rel="noopener noreferrer"
          href="https://maps.app.goo.gl/1RqqwVkYJ7zMieC8A"
        >
          Saturday, 21st September <br />
          12:00 PM onwards <br />
          Avendale at Painted Tree Clubhouse <br />
          2600 N Lake Forest Dr <br />
          McKinney, TX 75071
        </HomeBottomText>
        <HomeImageContainer>
          <Image
            src="/assets/images/down.gif"
            alt="down"
            height={40}
            width={40}
          />
        </HomeImageContainer>
        <MyCustomGForm />
      </HomeContainer>
    </HomeWrapper>
  );
}
