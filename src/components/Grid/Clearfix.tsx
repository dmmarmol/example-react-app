import { styled } from 'App/Theme';

const Clearfix = styled.div`
    &:before,
    &:after {
        display: table;
        content: ' ';
    }
    &:after {
        clear: both;
    }
`;

export default Clearfix;
