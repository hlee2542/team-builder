import React from 'react';
import './member.css';

const Member = (props) => {
    return (
        <div className='memberCard'>
            <h4>Name: {props.member.name}</h4>
            <p>Email: {props.member.email}</p>
            <p>Role: {props.member.role}</p>
        </div>
    )
}

export default Member;