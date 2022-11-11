import { tab } from '@testing-library/user-event/dist/tab';
import React, { useState } from 'react'
import api from '../api'

const Users = () => {
    
    const usersAPI = api.users.fetchAll()
    console.log('usersAPI', usersAPI);

    const [items, setItems] = useState(usersAPI)
    const userRowChangche = (id) => {
        setItems(prevState => prevState.filter(item => item._id !== id))
    }

    const [count, setcount] = useState(0)
    const countContainer = () => {
        const length = items.length.toString().slice(-1)
              if (length == 0 && items.length.toString() < 10) {
                  return (<span className="badge rounded-pill text-bg-danger m-3 counterFont">увы, {items.length} человек готовы тусануть с тобой сегодня, ты ни кому не нужен</span>)
              } else if (length == 0 && items.length.toString() > 10) {
                  return (<span className="badge rounded-pill text-bg-success m-3 counterFont">{items.length} человек тусанёт с тобой сегодня, у тебя нет друзей</span>)
              } else if (length == 1 && items.length.toString() < 10) {
                  return (<span className="badge rounded-pill text-bg-warning m-3 counterFont">всего {items.length} человек готов тусануть с тобой сегодня</span>)
              } else if (length == 1 && items.length.toString() > 10) {
                  return (<span className="badge rounded-pill text-bg-success m-3 counterFont">{items.length} человек тусанёт с тобой сегодня</span>)
              } else if (items.length.toString() > 10 && length === '2') {
                  return (<span className="badge rounded-pill text-bg-success m-3 counterFont">{items.length} человек тусанёт с тобой сегодня</span>) 
              } else if (items.length.toString() < 10 && length >= 2 && length <= 4) {
                  return (<span className="badge rounded-pill text-bg-primary m-3 counterFont">{items.length} человека тусанёт с тобой сегодня</span>) 
              } return (<span className="badge rounded-pill text-bg-success m-3 counterFont">{items.length} человек тусанёт с тобой сегодня</span>)
  }

    const renderQualities = (item, qualities) => {
        return qualities.map(item => (
                <span key={item.name} className={`badge text-bg-${item.color} m-1 qualities`}>{item.name}</span>
        )) 
    }

    const [headings, setHeading] = useState(['Имя', 'Качества', 'Профессия', 'Встретился (раз)', 'Оценка', 'Удалить'])
    const renderHeadings = () => {
        return  headings.map(heading => (
            <th scope="col" key={heading}>{heading}</th>
    ))
    }

    const rowUsers = items.map((item, id) => {
        return (
            <tr className="table-active rowUser" key={id}>
                <td>{item.name}</td>
                <td>{renderQualities(item, item.qualities)}</td>
                <td>{item.profession.name}</td>
                <td className='completedMeetings'>{item.completedMeetings}</td>
                <td>{item.rate} /5</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => userRowChangche(item._id)}>Удалить</button>
                    </td>
            </tr>
        )
    })

    return (
        <React.Fragment>
        {countContainer()}
        <table className="table table-dark table-striped ">
        <thead className="table-dark">
            <tr className='headingContainer'>
                {renderHeadings()}
            </tr>
        </thead>
        <tbody>
            {rowUsers}         
        </tbody>
        </table>
        </React.Fragment>
        )
}

export default Users