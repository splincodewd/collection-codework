import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
    static contextType = ThemeContext;

    setChecked = (theme) => {
        this.context.setTheme(theme);
    }

    render() {
        const { themes, theme } = this.context;

        return (
            <ButtonGroup className="mb-2">
                {themes.map((item) => (
                    <ToggleButton
                        id={'key_' + item.id}
                        type="radio"
                        variant="primary"
                        checked={theme.id === item.id}
                        value={item.id}
                        key={item.id}
                        onChange={(e) => this.setChecked(item)}
                    >
                        {item.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        );
    }
}

export default ThemeSwitcher;
