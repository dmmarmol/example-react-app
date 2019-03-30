import { styled, breakpoint } from 'App/Theme';
import { addHorizontalPadding } from '../Styles/utils';

type ColNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
const MAX_COLS = 12;

interface IColProps {
    xs?: ColNumber;
    sm?: ColNumber;
    md?: ColNumber;
    lg?: ColNumber;
}

function calcWidth(colSize: number) {
    const result = `${(100 / MAX_COLS) * colSize}%`;
    return result;
}

const Col = styled.div<IColProps>`
    flex: 0 0 auto;
    max-width: 100%;
    width: ${({ xs }) => (xs ? calcWidth(xs) : '100%')};

    ${({ theme, sm, md, lg }) => `
    ${addHorizontalPadding(theme.gap.xs)}

    /** @media queries */
    ${breakpoint.sm(`
      ${sm ? `width: ${calcWidth(sm)}` : ''};
      ${addHorizontalPadding(theme.gap.sm)}
    `)}
    ${breakpoint.md(`
      ${md ? `width: ${calcWidth(md)}` : ''};
      ${addHorizontalPadding(theme.gap.sm)}
    `)}
    ${breakpoint.lg(`
      ${lg ? `width: ${calcWidth(lg)}` : ''};
      ${addHorizontalPadding(theme.gap.sm)}
    `)}
  `}
`;

Col.displayName = 'Col';

export default Col;
