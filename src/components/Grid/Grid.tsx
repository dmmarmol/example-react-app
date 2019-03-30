import { styled, breakpoint } from 'App/Theme';
import { addHorizontalPadding, addVerticalPadding } from '../Styles/utils';

interface IGridProps {
    stretch?: boolean;
    height?: string;
    /** Adds vertical space */
    innerSpace?: boolean;
}

const Grid = styled.div<IGridProps>`
    width: 100%;
    height: ${({ height, stretch }) => (height ? height : stretch ? '100%' : 'auto')};
    max-width: ${({ theme }) => `${theme.breakpoints.lg}em`};
    margin-left: auto;
    margin-right: auto;

    ${({ theme, innerSpace }) => `
    ${addHorizontalPadding(theme.gap.xs)}
    ${innerSpace ? addVerticalPadding(theme.gap.xs) : ''}
    
    /** @media queries */
    ${breakpoint.sm(`
      ${addHorizontalPadding(theme.gap.sm)}
      ${innerSpace ? addVerticalPadding(theme.gap.sm) : ''}
    `)}
    ${breakpoint.md(`
      ${addHorizontalPadding(theme.gap.md)}
      ${innerSpace ? addVerticalPadding(theme.gap.md) : ''}
    `)}
    ${breakpoint.lg(`
      ${addHorizontalPadding(theme.gap.lg)}
      ${innerSpace ? addVerticalPadding(theme.gap.lg) : ''}
    `)}
  `}
`;

export default Grid;
