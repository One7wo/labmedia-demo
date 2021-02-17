import React from 'react';

export default function Search({ search }) {
    return (
        <div className="search-form__field">
            <input type="text" placeholder="Поиск по имени или e-mail" onChange={search}></input>
        </div>
    )
}
