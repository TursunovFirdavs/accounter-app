import React from 'react'
import Form from '../../components/Form'

const submit = (data) => {
    console.log(data);
}

const Decrease = () => {
  return (
    <div>
        <Form title={'ayirish'} onsubmit={submit} />
    </div>
  )
}

export default Decrease