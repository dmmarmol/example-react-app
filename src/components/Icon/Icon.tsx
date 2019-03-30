import * as React from 'react';
import { styled, appTheme } from 'App/Theme';
import Icons, { IconType } from './Icons';
import { IAppSize } from 'App/app-types';

interface IIconImageProps {
    size?: IAppSize;
}

const iconSizeMap: { [i in IAppSize]: string } = {
    xs: appTheme.icon.xs,
    sm: appTheme.icon.sm,
    md: appTheme.icon.md,
    lg: appTheme.icon.lg,
};

const IconImage = styled.i<IIconImageProps>`
    display: block;
    height: ${props => (props.size ? iconSizeMap[props.size] : iconSizeMap.sm)};
    svg,
    svg * {
        width: ${props => (props.size ? iconSizeMap[props.size] : iconSizeMap.sm)};
    }
`;

interface IIconProps {
    type: IconType;
    size?: IAppSize;
}

const Icon: React.FunctionComponent<IIconProps> = ({ type, ...props }) => {
    const Component = Icons[type] as React.ForwardRefExoticComponent<{}>;
    return (
        <IconImage {...props}>
            <Component />
        </IconImage>
    );
};

export default Icon;
