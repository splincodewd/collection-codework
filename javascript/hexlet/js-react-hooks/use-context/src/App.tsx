import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Home from './Home.js';
import Profile from './Profile.js';
import ThemeSwitcher from './ThemeSwitcher.js';
import ThemeContext, {Theme} from './contexts';

const themes: Theme[] = [
    {
        id: 1,
        name: 'White',
        className: 'light',
    },
    {
        id: 2,
        name: 'Black',
        className: 'dark',
    },
    {
        id: 3,
        name: 'Blue',
        className: 'dark-blue',
    },
];

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes[0]);

    return (
        <ThemeContext.Provider value={{ theme, themes, setTheme: (newTheme) => setTheme(newTheme) }}>
            {children}
        </ThemeContext.Provider>
    );
};

const App = () => (
    <ThemeProvider>
        <Tabs className="mb-3">
            <Tab eventKey="home" title="Home">
                <Home />
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <Profile />
            </Tab>
        </Tabs>
        <ThemeSwitcher />
    </ThemeProvider>
);

export default App;
