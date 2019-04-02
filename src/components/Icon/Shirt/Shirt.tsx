import * as React from 'react';
import styled from 'App/Theme';

interface ShirtProps {
    number: number;
}

const Circle = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    border-radius: 50%;
    text-align: center;

    width: 12px;
    height: 12px;
    font-size: 9px;
    font-weight: bold;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    position: relative;
`;

const Shirt: React.FunctionComponent<ShirtProps> = ({ number }) => {
    return (
        <Container>
            <Circle>{number}</Circle>
            <img src={require('./shirt.png')} width="28" height="28" />
        </Container>
    );
};

export default Shirt;
