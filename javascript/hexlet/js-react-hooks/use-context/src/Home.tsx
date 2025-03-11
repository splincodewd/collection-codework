import React, { useContext } from 'react';

import ThemeContext from './contexts/index.js';

const Home = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <article className={theme.className}>
            Текст для вкладки Home
        </article>
    );
};

export default Home;
