import React from 'react';
import cl from './Search.module.css';
import { useState } from 'react';

const Search = ({ date, setProducts }) => {
    return (
        <div className={cl.search}>
            <div className={cl.title}>Поиск</div>
            <input
                type="search"
                placeholder="Введите текст"
                id="search"
                className={cl.input}
                onChange={(event) => setProducts(
                        date.filter((item) => {
                            return item.title
                                .toLowerCase()
                                .includes(event.target.value.toLowerCase());
                        })
                    )
                }
            />
        </div>
    );
};

export default Search;