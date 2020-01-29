import React from 'react';
import Member from './Member'

const MemberList = (props) => {
    return (
        <div>
            {props.members.length ? props.members.map(member => <Member member={member}/>) : null}
        </div>
    )
}

export default MemberList;