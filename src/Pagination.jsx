import React from 'react';

export default function Pagination({ usersPerPage, totalUsers, paginate, activePage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <div className='pagination inner'>
                {pageNumbers.map(number => (
                    <div
                        key={number}
                        className={`page-number ${activePage === number ? 'active' : ''}`}
                        onClick={() => { paginate(number); }}
                    >
                        {number}
                    </div>
                ))}
            </div>
        </nav>
    )
}
