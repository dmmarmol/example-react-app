import * as React from 'react';
import Color from 'color';
import { styled, breakpoint, IAppSize, IAppTypes, Theme } from 'App/Theme';
import { addHorizontalPadding, addVerticalPadding } from '../Styles/utils';
import { IconType } from '../Icon/Icons';
import Icon from '../Icon/Icon';
import { colorForBackground } from '../Styles/Background';

interface IButtonProps {
    type?: IAppTypes;
    transparent?: boolean;
    href?: string;
    icon?: IconType;
    size?: IAppSize;
    onClick?: (e?: React.MouseEvent<HTMLAnchorElement>) => void;
    blank?: boolean;
}

const DEFAULT_BUTTON_COLOR_ALTERNATE_VALUE = 0.4;
const DEFAULT_BUTTON_TYPE: IAppTypes = 'primary';

const buttonSizeMap: { [i in IAppSize]: string } = {
    xs: '0.8em',
    sm: '1.15em',
    md: '1.4em',
    lg: '2em',
};

function getButtonTypeProps(theme: Theme, type: IAppTypes): string {
    const normal = {
        background: theme[type],
        color: colorForBackground[type],
    };
    const hover = {
        background: Color(normal.background)
            .saturate(DEFAULT_BUTTON_COLOR_ALTERNATE_VALUE)
            .darken(DEFAULT_BUTTON_COLOR_ALTERNATE_VALUE),
    };

    return `
    color: ${normal.color};
    background-color: ${normal.background};
    &:hover {
      background-color: ${hover.background};
      svg {
        fill: ${hover.background};
      }
    }
  `;
}

const ButtonStyled = styled.a<IButtonProps>`
  display: inline-block;
  border: 0;
  text-align: center;
  text-decoration: none;
  cursor: ${({ href, onClick }) => (href || onClick ? 'pointer' : 'default')};
  transition: color ${({ theme }) => theme.animation.normal} ease, background-color ${({ theme }) =>
    theme.animation.normal} ease;
  
  /**
   * Button Types
   */
   ${({ theme, icon, type = DEFAULT_BUTTON_TYPE }) => !icon && type && getButtonTypeProps(theme, type)}
  
  /**
   * Transparent
   */
  ${({ transparent }) => {
      return Boolean(transparent) && 'background-color: transparent;';
  }}

  /**
   * Button Sizes
   */
  ${({ size }) =>
      size &&
      `
    font-size: ${buttonSizeMap[size]}
  `}

  /**
   * Button Icon Only
   */
  &.icon-only {
    padding: 0 ${({ theme }) => theme.gap.xs};
    svg {
        ${({ type }) => (type ? `fill: ${colorForBackground[type]}` : '')}  
        transition: fill ${({ theme }) => theme.animation.normal} ease;
    }
    &:hover {
      background-color: transparent;
      svg {
        ${({ type }) => type && `fill: ${colorForBackground[type]}`}
          /*
          Color(theme[type]).darken(
            DEFAULT_BUTTON_COLOR_ALTERNATE_VALUE
          )
           */
      }
    }
  }
  
  
   /**
   * Button Padding
   */
  ${({ theme, icon }) => `
    ${!Boolean(icon) ? addHorizontalPadding(theme.gap.xs) : ''}
    ${addVerticalPadding(theme.gap.xs, { multiply: false })}
    
    /** @media queries */
    ${breakpoint.sm(`
        ${!Boolean(icon) ? addHorizontalPadding(theme.gap.sm) : ''}
        ${addVerticalPadding(theme.gap.sm, { multiply: false })}
    `)}
    ${breakpoint.md(`
        ${!Boolean(icon) ? addHorizontalPadding(theme.gap.md) : ''}
        ${addVerticalPadding(theme.gap.md, { multiply: false })}
    `)}
    ${breakpoint.lg(`
        ${!Boolean(icon) ? addHorizontalPadding(theme.gap.lg) : ''}
        ${addVerticalPadding(theme.gap.lg, { multiply: false })}
    `)}
  `}

`;

const Button: React.FunctionComponent<IButtonProps> = ({ icon, size, children, ...props }) => {
    const Component = props.href ? 'a' : 'button';
    const classNames = icon ? 'icon-only' : '';
    return (
        <ButtonStyled {...props} as={Component} className={classNames} target={props.blank ? '_blank' : undefined}>
            {icon ? <Icon type={icon} size={size} /> : { children }}
        </ButtonStyled>
    );
};

Button.displayName = 'Button';

export default Button;
