import React from 'react';
import PropTypes from 'prop-types';

export default function UserInfo({ username, email, registration_date, rating }) {
    return (
        <div className="users-table__user-info">
            <div className="name">{username}</div>
            <div className="email text">{email}</div>
            <div className="date text">{registration_date.split('T')[0]}</div>
            <div className="rating text">{rating}</div>
            <div className="delete-btn"><span>&#10006;</span> </div>
        </div>
    )
}

UserInfo.propTypes = {
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
}


