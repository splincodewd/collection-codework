import React, {memo, useCallback, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';

export const Factorial = memo(({ number, getFactorial }: {number: number; getFactorial: (num: number) => number }) => {
    const { t } = useTranslation();

    return <div>{t('factorial')}{t('of')}{number}{t('is')}{getFactorial(number)}</div>;
});

const App = () => {
    const { t, i18n } = useTranslation();
    const [value, setValue] = useState(0);
    const handleLangSwitch = (e) => {
        const lang = e.target.dataset.testid;
        i18n.changeLanguage(lang);
    };

    const factorialFunc = (number) => {
        if (number <= 0) return 1;
        return number * factorialFunc(number - 1);
    };

    const getClassName = (currLang) => {
        return i18n.language === currLang ? 'btn btn-primary' : 'btn btn-outline-primary';
    };

    const getFactorial = useCallback((val: number) => useMemo(() => factorialFunc(val), [val]), [value]);

    return (
        <div className="App">
            <div className="btn-group mb-3" role="group">
                <button
                    type="button"
                    data-testid="en"
                    className={getClassName('en')}
                    onClick={handleLangSwitch}
                >
                    {t('languages.en')}
                </button>
                <button
                    type="button"
                    data-testid="ru"
                    className={getClassName('ru')}
                    onClick={handleLangSwitch}
                >
                    {t('languages.ru')}
                </button>
            </div>
            <br />
            <div className="btn-group mb-3" role="group">
                <button type="button" className="btn btn-outline-primary" onClick={() => setValue(1)}>{`${t('factorial')} 1`}</button>
                <button type="button" className="btn btn-outline-primary" onClick={() => setValue(5)}>{`${t('factorial')} 5`}</button>
                <button type="button" className="btn btn-outline-primary" onClick={() => setValue(10)}>{`${t('factorial')} 10`}</button>
                <button type="button" className="btn btn-outline-primary" onClick={() => setValue(20)}>{`${t('factorial')} 20`}</button>
            </div>
            <Factorial number={value} getFactorial={getFactorial} />
        </div>
    );
};

export default App;
