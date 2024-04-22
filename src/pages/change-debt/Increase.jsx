import React from 'react'
import DebtForm from '../../components/DebtForm';

const submit = (data) => {
  console.log(data);
}

const Increase = () => {
  return (
    <div>
      <DebtForm title={"qo'shish"} onsubmit={submit} />
    </div>
  )
}

export default Increase