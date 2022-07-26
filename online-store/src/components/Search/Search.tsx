import React from 'react';
import cl from './Search.module.css';
import { SearchProps } from './Search.props';

const Search = ({ enterText, dafaultValue }:SearchProps): JSX.Element => {
    return (
        <div className={cl.search}>
            <div className={cl.title}>Поиск</div>
            <input
                value={dafaultValue}
                autoFocus = {true}
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