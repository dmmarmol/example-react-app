import { styled, breakpoint } from 'App/Theme';
import Clearfix from './Clearfix';
import { IAppSize } from 'App/app-types';

interface IRowProps {
    bottom?: IAppSize;
}

const SIZE_TO_MARGIN_BOTTOM: { [i in IAppSize]: number } = {
    xs: 1,
    sm: 1.5,
    md: 2,
    lg: 2.5,
};

const Row = styled(Clearfix)<IRowProps>`
    display: flex;
    flex: 0 1 auto;
    /** Render vertically in smaller resolutions */
    flex-direction: column;
    /** Bottom gap */
    ${({ bottom }) => bottom && `margin-bottom: ${SIZE_TO_MARGIN_BOTTOM[bottom]}em`}

    ${({ theme }) => `
    margin-left: -${theme.gap.xs};
    margin-right: -${theme.gap.xs};
    
    /** @media queries */
    ${breakpoint.sm(`
      margin-left: -${theme.gap.sm};
      margin-right: -${theme.gap.sm};
      flex-direction: row;
    `)}
    ${breakpoint.md(`
      margin-left: -${theme.gap.md};
      margin-right: -${theme.gap.md};
    `)}
    ${breakpoint.lg(`
      margin-left: -${theme.gap.lg};
      margin-right: -${theme.gap.lg};
    `)}
  `}
`;

export default Row;
