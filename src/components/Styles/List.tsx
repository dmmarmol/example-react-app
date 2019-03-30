import * as React from 'react';
import { styled } from 'App/Theme';

interface IListStyledProps extends React.OlHTMLAttributes<{}> {
    vertical?: boolean;
}

interface IListItemProps {}

const ListStyled = styled.ul<IListStyledProps>`
    position: relative;
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
    li {
    }
`;

class List extends React.PureComponent<IListStyledProps> {
    public static displayName = 'List';

    public static Item: React.ComponentType<React.LiHTMLAttributes<IListItemProps>> = ({ children, ...props }) => (
        <li {...props}>{children}</li>
    );

    public render() {
        const { children, ...props } = this.props;
        return <ListStyled {...props}>{children}</ListStyled>;
    }
}

export default List;
