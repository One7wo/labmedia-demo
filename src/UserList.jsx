import React from 'react';
import UserInfo from './UserInfo';

export default function UserList({ items, active, onActive, visibleClr, loading, refresh, all, lastUser, pageSize }) {

    //toggle active sorts
    const [toggleRatingActive, setToggleRatingActive] = React.useState(null);
    const [toggleDate, setToggleDate] = React.useState(null);

    if (loading) {
        return <h2 className="inner loading">Loading...</h2>
    }

    return (
        <div>
            <div className="sort-buttons inner">
                <div className="sort-buttons__text text">Сортировка:</div>
                <div
                    onClick={() => {
                        if (toggleDate) {

                            //allUsers - correct array for sort in page and application
                            const allUsers = all.slice(0, lastUser - pageSize).concat(items.sort((a, b) => {
                                return b.registration_date.split('T')[0].split('-').join('') - a.registration_date.split('T')[0].split('-').join('')
                            }), all.slice(lastUser, 25));

                            //update all userList
                            refresh(allUsers)

                            setToggleDate(!toggleDate)
                        }
                        else {
                            const allUsers = all.slice(0, lastUser - pageSize).concat(items.sort((a, b) => {
                                return a.registration_date.split('T')[0].split('-').join('') - b.registration_date.split('T')[0].split('-').join('')
                            }), all.slice(lastUser, 25));
                            refresh(allUsers);
                            setToggleDate(!toggleDate);
                        }

                        //remove .active in button rating  sort
                        setToggleRatingActive(null);

                        //activate visible button clear filters
                        visibleClr();

                        //fist click add .active
                        onActive();
                    }}
                    className={`sort-buttons__date text ${toggleDate != null && active ? 'active' : ''}`}> Дата регистрации</div>
                <div
                    onClick={() => {
                        if (toggleRatingActive) {
                            const allUsers = all.slice(0, lastUser - pageSize).concat(items.sort((a, b) => b.rating - a.rating), all.slice(lastUser, 25))
                            refresh(allUsers);
                            setToggleRatingActive(!toggleRatingActive);
                        }
                        else {
                            const allUsers = all.slice(0, lastUser - pageSize).concat(items.sort((a, b) => a.rating - b.rating), all.slice(lastUser, 25))
                            refresh(allUsers);
                            setToggleRatingActive(!toggleRatingActive);
                        }
                        setToggleDate(null);
                        visibleClr();
                        onActive();
                    }}
                    className={`sort-buttons__rating text ${toggleRatingActive != null && active ? 'active' : ''} `} >Рейтинг</div>
            </div>
            <div className="users-table inner">
                <div className="users-table__header">
                    <div className="name text">Имя пользователя</div>
                    <div className="email text">Email</div>
                    <div className="date text">Дата регистрации</div>
                    <div className="rating text">Рейтинг</div>
                    <div className="remove">&#10006;</div>
                </div>
                {
                    items.map(obj => <UserInfo
                        key={obj.id}
                        {...obj}
                    />)
                }
            </div>
        </div>
    )
}
