import React from 'react';
import Filter from './assets/svg/filter (1).svg';

export default function ClearButton({ clear, visible }) {
    return (
        <div className="search-form__clear-btn" onClick={clear}>
            <img src={Filter} alt="img" className={`${!visible && 'visible'}`} />
            <span className={`text ${!visible && 'visible'}`}>Очистить фильтр</span>
        </div>
    )
}
