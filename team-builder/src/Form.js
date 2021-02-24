import React, { useState } from 'react'

const initialFormValues = {
    membername: '',
    memberemail: '',
    memberrole: '',
  }  

export default function MemberForm() {
    const [members, setMembers ] = useState([]) 
    const { formdata, setFormdata } = useState({
        initialFormValues
    })
      
    const onChange = evt =>{
        const newData = {
            ...formdata,
            [evt.target.name]:evt.target.value
        }
        setFormdata(newData)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        const newMember= {
            ...formdata,
            [evt.target.name]:evt.target.value,
        }
        setMembers(newMember)
        setFormdata(initialFormValues)
    }
      
    return (
        <div>
            <form onSubmit={onSubmit}>
            <div className='inputs'>
                <label>Your Name:
                <input 
                    name='membername' 
                    type='text' 
                    placeholder='type your name...'
                    maxLength='30'
                    value={formdata}
                    onChange={onChange}
                />
                </label>
      
                <label>Email
                <input
                  name='memberemail' 
                  type='email' 
                  placeholder='name@email.com'
                  value={formdata}
                  onChange={onChange}
                />
                </label>
      
                <label>Role
                <select value={formdata} name='memberrole' onChange={onChange}>
                    <option value=''>--- Select role.. ---</option>
                    <option value='BACKEND'>Backend Engineer</option>
                    <option value='FRONEND'>Frontend Engieer</option>
                    <option value='DESIGNER'>Designer</option>
                </select>
                </label>
      
                <div className='submit'>
                <button>submit</button>
                </div>
            </div>
            </form>
            <div>{members}</div>
        </div>
    )
}