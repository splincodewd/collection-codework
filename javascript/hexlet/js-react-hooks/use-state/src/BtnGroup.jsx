import cn from 'classnames';
import React, { useState } from 'react';

const BtnGroup = () => {
    const [active, setActive] = useState(null);

    return (
        <div className="btn-group" role="group">
            <button type="button" className={cn('btn btn-secondary', {left: true, active: active === 'left'})} onClick={() => setActive('left')}>Left</button>
            <button type="button" className={cn('btn btn-secondary', {right: true, active: active === 'right'})} onClick={() => setActive('right')}>Right</button>
        </div>
    );
};

export default BtnGroup;

// OR
/**
 *
 *   const [activeButton, setActiveButton] = useState(null);
 *
 *   const getClassName = (position) => cn('btn btn-secondary', position, { active: activeButton === position });
 *
 *   return (
 *     <div className="btn-group" role="group">
 *       <button type="button" className={getClassName('left')} onClick={() => setActiveButton('left')}>Left</button>
 *       <button type="button" className={getClassName('right')} onClick={() => setActiveButton('right')}>Right</button>
 *     </div>
 *   );
 *
 */