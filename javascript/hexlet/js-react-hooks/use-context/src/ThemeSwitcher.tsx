import React, { useContext } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

const ThemeSwitcher = () => {
    const {setTheme, themes, theme} = useContext(ThemeContext);

    return (
        <ButtonGroup className="mt-2">
            {themes.map((curTheme) => (
                <ToggleButton
                    key={curTheme.id}
                    id={`radio-${curTheme.id}`}
                    type="radio"
                    name="radio"
                    value={curTheme.name}
                    checked={curTheme.name === theme.name}
                    onChange={() => setTheme(curTheme)}
                >
                    {curTheme.name}
                </ToggleButton>
            ))}
        </ButtonGroup>
    );
};

export default ThemeSwitcher;