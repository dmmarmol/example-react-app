import { styled, appTheme } from 'App/Theme';
import { IAppSize } from 'src/App/app-types';
import { addHorizontalPadding, addVerticalPadding } from 'components/Styles/utils';

interface IGapProps {
    all?: boolean;
    size?: IAppSize;
    vertical?: boolean;
    asMargin?: boolean;
    display?: 'inline' | 'block';
}

const getSize = (size: IAppSize, all: IGapProps['all'], vertical: IGapProps['vertical']) => {
    if (all) {
        return `${addVerticalPadding(appTheme.gap[size])} ${addHorizontalPadding(appTheme.gap[size])}`;
    }
    if (vertical) {
        return addVerticalPadding(appTheme.gap[size]);
    }
    return addHorizontalPadding(appTheme.gap[size]);
};

const Gap = styled.div<IGapProps>`
    position: relative;
    ${({ display = 'block' }) => `display: ${display}`}
    ${({ size, all, vertical }) => `
        ${size ? getSize(size, all, vertical) : ''}
        ${size ? getSize(size, all, vertical) : ''}
        ${size ? getSize(size, all, vertical) : ''}
        ${size ? getSize(size, all, vertical) : ''}
    `}
`;

Gap.displayName = 'Gap';

export default Gap;
