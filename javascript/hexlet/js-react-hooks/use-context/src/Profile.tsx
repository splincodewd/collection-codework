
import React, { useContext } from 'react';

import ThemeContext from './contexts/index.js';

const Profile = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <article className={theme.className}>
            Текст для вкладки Profile
        </article>
    );
};

export default Profile;
