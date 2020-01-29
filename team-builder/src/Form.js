import React, {useState} from 'react';

const Form = (props) => {
    let [member, setMember] = useState({name: '', email: '', role: ''});
    const handleSubmit = (event) => {
        event.preventDefault();
        props.setMembers(props.members.concat([member]));
        setMember({name: '', email: '', role: ''});
    }
    return (
        <div>
            <form>
                <label htmlFor='name'>
                    Name:
                    <input type='text' value={member.name} onChange={event => setMember({name: event.target.value, email: member.email, role: member.role})}/>
                </label>
                <br/>
                <label htmlFor='email'>
                    Email:
                    <input type='email' value={member.email} onChange={event => setMember({name: member.name, email: event.target.value, role: member.role})}/>
                </label>
                <br/>
                <label htmlFor='role'>
                    Role:
                    <input type='text' value={member.role} onChange={event => setMember({name: member.name, email: member.email, role: event.target.value})}/>
                </label>
                <br/>
                <label htmlFor='submit'>
                    <input type='submit' onClick={(event) => handleSubmit(event)}/>
                </label>
            </form>
        </div>
    )
}

export default Form;