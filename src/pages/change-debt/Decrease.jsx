import React from 'react'
import DebtForm from '../../components/DebtForm';

const submit = (data) => {
    console.log(data);
}

const Decrease = () => {
  return (
    <div>
        <DebtForm title={'ayirish'} onsubmit={submit} />
    </div>
  )
}

export default Decrease