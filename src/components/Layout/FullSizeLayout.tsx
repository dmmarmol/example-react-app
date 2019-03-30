import { styled } from 'App/Theme';

const FullSizeLayout = styled.main`
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.light};
`;

FullSizeLayout.displayName = 'FullSizeLayout';

export default FullSizeLayout;
