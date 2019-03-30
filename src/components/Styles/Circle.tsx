import { styled } from 'App/Theme';

interface ICircleProps {
    width?: string;
    height?: string;
}

const Circle = styled.div<ICircleProps>`
    height: ${props => props.width || '150px'};
    width: ${props => props.width || '150px'};
    display: block;
    border: 3px solid ${({ theme }) => theme.gray};
    border-radius: 50%;
    overflow: hidden;
    img {
        width: 100%;
    }
`;

export default Circle;
