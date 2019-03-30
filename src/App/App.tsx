import * as React from 'react';
import './reset.scss';
import './global.scss';

import { Provider } from 'react-redux';
import { store } from 'redux/store';

/** Replace below imports with a Routing system */
import { appTheme } from './Theme';
import { ThemeProvider } from 'styled-components';

import Home from 'sections/Home/Home';

const App: React.SFC<{}> = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={appTheme}>
                <Home />
            </ThemeProvider>
        </Provider>
    );
};

export default App;
