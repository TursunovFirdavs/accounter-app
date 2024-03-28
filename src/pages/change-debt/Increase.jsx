import React from 'react'
import Form from '../../components/Form'

const submit = (data) => {
  console.log(data);
}

const Increase = () => {
  return (
    <div>
      <Form title={"qo'shish"} onsubmit={submit} />
    </div>
  )
}

export default Increase