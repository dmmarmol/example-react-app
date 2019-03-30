import * as React from 'react';
import { styled, breakpoint } from 'App/Theme';
import Clearfix from 'components/Grid/Clearfix';
import Grid from 'components/Grid/Grid';
import Cell from '../Grid/Cell';
import { Flex } from '../Styles';
import { IBackgroundProps } from '../Styles/Background';

const NavigationList = styled.ul`
    list-style: none;
    padding-left: 0;
    display: flex;
    justify-content: flex-end;
`;

const Header = styled(Clearfix)<INavigationProps>`
    width: 100%;
    display: none;
    ${breakpoint.sm(`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  `)}
`.withComponent('header');

interface INavigationProps extends IBackgroundProps {
    title?: string;
}

const Navigation: React.SFC<INavigationProps> = ({ type, ...props }) => {
    const Children = React.Children.map(props.children, child => {
        return React.cloneElement(child as React.ReactElement, { type });
    });

    return (
        <Header>
            <Grid>
                <Cell>
                    <Flex align="center" fit>
                        {props.title}
                    </Flex>
                </Cell>
                <Cell>
                    <Flex align="center" fit justify="end">
                        <NavigationList>{Children}</NavigationList>
                    </Flex>
                </Cell>
            </Grid>
        </Header>
    );
};

export default Navigation;
