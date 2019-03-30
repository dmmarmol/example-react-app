import { styled } from 'App/Theme';

type IFlexAlign = 'start' | 'center' | 'end';
type IFlexJustify = IFlexAlign | 'around' | 'between';

interface IFlexProps {
    align?: IFlexAlign;
    justify?: IFlexJustify;
    fit?: boolean;
    flex?: number;
    //   self?: 'center' | 'end';
    //   stretch?: boolean;
    //   row?: boolean;
    //   wrap?: boolean;
}

const Align: { [i in IFlexAlign]: string } = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
};

const Justify: { [i in IFlexJustify]: string } = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    around: 'space-around',
    between: 'space-between',
};

const Flex = styled.div<IFlexProps>`
    display: flex;
    align-items: ${({ align }) => align && Align[align]};
    justify-content: ${({ justify }) => justify && Justify[justify]};
    flex: ${({ flex }) => flex};

    ${props =>
        props.fit &&
        `
    height: 100%;
    flex-grow: 1;
  `};
`;

export default Flex;
