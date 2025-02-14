import React from 'react';

import ThemeContext from './contexts';

const content = 'Текст для вкладки Profile';

class Profile extends React.Component {
    static contextType = ThemeContext;

    render() {
        return <article className={this.context.theme.className}>{content}</article>;
    }
}

export default Profile;
