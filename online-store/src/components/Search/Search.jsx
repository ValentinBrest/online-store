import React from 'react';
import cl from './Search.module.css';

const Search = ({ enterText }) => {
    return (
        <div className={cl.search}>
            <div className={cl.title}>Поиск</div>
            <input
                autofocus="on"
                type="search"
                autoComplete="off"
                placeholder="Введите текст"
                id="search"
                className={cl.input}
                onChange={(e) => enterText(e)}
            />
        </div>
    );
};

export default Search;