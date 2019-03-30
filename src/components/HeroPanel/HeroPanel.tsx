import * as React from 'react';
import { styled, breakpoint } from 'App/Theme';
import { Background, List } from '../Styles';
import { IBackgroundProps } from '../Styles/Background';
import { times, randomRange } from 'components/utils';
import { keyframes } from 'styled-components';

const HeroPanel = styled(Background.withComponent('section'))`
display: flex;
align-items: center;
width: 100%;
  padding: 0 ${({ theme }) => theme.gap.lg};
  padding-top: 4rem;
  padding-bottom: 2rem;
  > * { z-index: 10; }
  ${breakpoint.sm(`
    padding-top: 3rem;
    padding-bottom: 0rem;
    min-height: 600px;
    height: 100%;
  `)}
  h1 {
    // font-size: 3.5rem;
    font-weight: 600;
    line-height: 1.2em;
    margin-bottom: ${({ theme }) => theme.gap.md};
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    ${breakpoint.sm(`
      text-indent: -7px;
      font-size: 4.5rem;
    `)}
  }
  h2 {
    /* font-family: 'Courier', 'Courier New', 'Times New Roman', serif;
    // font-size: 1.5rem;
    ${breakpoint.xs(`
      line-height: 1.25em;
    `)}

    &:before {
      content: '>_ ';
    } */
  }
  p {
    font-size: 1.2rem;
    line-height: 1.4em;
    margin-top: 1rem;
    ${breakpoint.sm(`
      width: 60%;
      max-width: 500px;
      margin-top: 3rem;
    `)}
    &:first-of-type {
      &:before {
        content: '';
        width: 50px;
        display: block;
        border-top: 1px solid ${({ theme }) => theme.superLight};
        margin-bottom: 1em;
      }
    }
  }
`;

HeroPanel.displayName = 'HeroPanel';

const rippleAnimation = keyframes`
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

// const RippleItem = styled.li`
//   display: inline-block;
//   position: relative;
//   overflow: hidden;
// `;

const RippleItem = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    border-radius: 50%;
    user-select: none;
    pointer-events: none;
    transform: scale(0);
    background: #fff;
    opacity: 0.7;
    z-index: 10;
    animation: ${rippleAnimation} 1s linear;
`;

const CIRCLE_CLICK_ANIMATION_DURATION = '0.7s';
const CIRCLE_ANIMATION_FRAMES = [
    { delay: '0s', duration: '25s' },
    { delay: '6s', duration: '12s' },
    { delay: '6s', duration: '25s' },
    { delay: '9s', duration: '18s' },
    { delay: '6s', duration: '25s' },
    { delay: '3s', duration: '45s' },
    { delay: '7s', duration: '25s' },
    { delay: '15s', duration: '25s' },
    { delay: '20s', duration: '35s' },
    { delay: '3s', duration: '11s' },
    { delay: '6s', duration: '18s' },
    { delay: '9s', duration: '25s' },
];
const MAX_NUMBER_OF_CIRCLES = CIRCLE_ANIMATION_FRAMES.length;
/**
 * Animated CSS Background
 * @see https://codepen.io/mohaiman/pen/MQqMyo
 */
const AnimatedBackground = styled(HeroPanel)`
  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    ${breakpoint.xsOnly(`
      display: none;  
    `)}
    li {
      position: absolute;
      display: block;
      list-style: none;
      width: 20px;
      height: 20px;
      background: #fff;
      opacity: 0.2;
      animation: animate 25s linear infinite;
      top: 100%;
      z-index: 5;
      &.clicked {
        /* content: ' ';
        display: block;
        position: absolute;
        top: 0;
        left: 0; */
        /* z-index: 10; */
        /* background: #fff;
        opacity: 0.7; */
        /* transform: scale(2);
        transition: scale 100ms ease-in; */
        /* animation: ${rippleAnimation} 0.5s linear; */
      }
    }

    ${times(MAX_NUMBER_OF_CIRCLES).map(n => {
        const index = n + 1;
        const [min, max] = [randomRange(15, 30), randomRange(31, 45)];
        const r = randomRange(min, max);
        const position = randomRange(r, 100);
        const size = r * index;

        return `
        li:nth-child(${index}) {
          left: ${position}%;
          width: ${size}px;
          height: ${size}px;
          animation-delay: ${index * 3}s;
          // animation-delay: CIRCLE_ANIMATION_FRAMES[n].delay;
          animation-duration: CIRCLE_ANIMATION_FRAMES[n].duration; // ${(r * n) / 2};
        }
      `;
    })}
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }

  @keyframes ripple {
    100% {
      opacity: 0;
      transform: scale(2.5);
    }
  }
`;

const AnimatedItem: React.SFC = ({ children }) => {
    const classNames = ['circle'];
    const [wasClicked, onClick] = React.useState(false);

    if (wasClicked) {
        // classNames.push('clicked');
        /** Reset value */
        const timeout = setTimeout(() => {
            onClick(false);
            clearTimeout(timeout);
        }, CIRCLE_CLICK_ANIMATION_DURATION);
    }

    return (
        <List.Item className={classNames.join(' ')} onClick={() => onClick(true)}>
            {wasClicked ? <RippleItem>{children}</RippleItem> : children}
        </List.Item>
    );
};

interface IAnimatedHeroPanelProps extends IBackgroundProps {}

const AnimatedHeroPanel: React.SFC<IAnimatedHeroPanelProps> = ({ children, ...backgroundProps }) => {
    const values = times(MAX_NUMBER_OF_CIRCLES);

    return (
        <AnimatedBackground {...backgroundProps}>
            {children}
            <List className="circles">
                {values.map(value => (
                    <AnimatedItem key={value} />
                ))}
            </List>
        </AnimatedBackground>
    );
};

export default AnimatedHeroPanel;
