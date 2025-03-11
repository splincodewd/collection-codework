import { createContext } from 'react';

export interface IContext {
    themes: Theme[],
    theme: Theme,
    setTheme(theme: Theme): void;
}

export interface Theme {
    id: number;
    name: string,
    className: string,
}

export default createContext<IContext>({
    themes: [],
    theme: {} as Theme,
    setTheme: () => {},
});
