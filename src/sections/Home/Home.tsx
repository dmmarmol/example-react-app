import * as React from 'react';
import { Layout, Title, Cell } from 'components';

interface IHomeProps {}

const Home: React.SFC<IHomeProps> = () => {
    return (
        <Layout>
            <Cell left={0}>
                <Title>Football Player Finder</Title>
            </Cell>
            <Cell>some content</Cell>
        </Layout>
    );
};

export default Home;
