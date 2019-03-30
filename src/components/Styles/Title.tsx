import * as React from 'react';
import { styled, breakpoint } from 'App/Theme';

const BaseTitle = styled.h1`
    font-size: 3.5rem;
    line-height: 1.25em;
`;

interface ITitleProps {}

class Title extends React.PureComponent<ITitleProps> {
    public static H2: React.ComponentType<ITitleProps>;
    public static H3: React.ComponentType<ITitleProps>;

    public render() {
        return <BaseTitle>{this.props.children}</BaseTitle>;
    }
}

Title.H2 = styled(BaseTitle)`
    /* font-size: 2.75em; */
    font-family: 'Courier', 'Courier New', 'Times New Roman', serif;
    font-size: 1.5rem;
    ${breakpoint.xs(`
      line-height: 1.25em;
    `)}

    &:before {
        content: '>_ ';
    }
`.withComponent('h2');

Title.H3 = styled(BaseTitle)`
    font-size: 1.95em;
`.withComponent('h3');

export default Title;
