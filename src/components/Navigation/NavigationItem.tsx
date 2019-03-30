import * as React from 'react';
import { styled } from 'App/Theme';

import Icon from '../Icon/Icon';
import { IconType } from '../Icon/Icons';
import { Background } from '../Styles';
import { IBackgroundProps } from '../Styles/Background';

interface INavigationItemProps extends IBackgroundProps {
    icon?: IconType;
    href?: string;
    disabled?: boolean;
}

const Item = styled.li<INavigationItemProps>`
    display: inline-block;
    text-align: center;

    position: relative;
    i {
        margin-bottom: ${({ theme }) => theme.gap.sm};
    }
    a {
        text-decoration: none;
        color: inherit;
        display: block;
        padding: ${({ theme }) => `${theme.gap.md} ${theme.gap.md}`};
        font-weight: 600;
        &.disabled {
            opacity: 0.7;
            cursor: default;
        }
    }
`;

const NavigationItem: React.SFC<INavigationItemProps> = ({ icon, href, disabled, children, ...props }) => {
    return (
        <Item>
            <Background {...props} reverse={false}>
                <a href={href} className={disabled ? 'disabled' : ''} title={disabled ? 'Currently not available' : ''}>
                    {icon && <Icon type={icon} size="xs" />}
                    {children}
                </a>
            </Background>
        </Item>
    );
};

export default NavigationItem;
