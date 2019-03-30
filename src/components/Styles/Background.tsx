import { styled, appTheme } from 'App/Theme';
import { IAppColors } from 'src/App/app-types';

export interface IBackgroundProps {
    type?: IAppColors;
    reverse?: boolean;
}

/**
 * App Color contrast
 * [background]: [color]
 */
export const colorForBackground: { [i in IAppColors]: string } = {
    dark: appTheme.light,
    light: appTheme.highlight,
    primary: appTheme.light,
    secondary: appTheme.light,
    highlight: appTheme.light,
};

const Background = styled.div<IBackgroundProps>`
    ${props => {
        const background = props.type
            ? !props.reverse
                ? props.theme[props.type]
                : colorForBackground[props.type]
            : undefined;

        const color = props.type
            ? !props.reverse
                ? colorForBackground[props.type]
                : props.theme[props.type]
            : undefined;

        return `
    background-color: ${background};
    color: ${color};
    svg {
      fill: ${color};
    }
  `;
    }}
`;

export default Background;
