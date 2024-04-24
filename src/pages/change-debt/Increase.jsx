import React from 'react'
import DebtForm from '../../components/DebtForm';
import { useParams } from 'react-router-dom';
import { useChangePrice } from '../../service/mutation/useChangePrice';

const Increase = () => {
  const { id } = useParams()
  const { mutate } = useChangePrice()
  
  const submit = (data) => {
    console.log({...data, type: 'ADD', id});
    mutate({...data, type: 'ADD', store:id}, {
      onSuccess: (res) => {
        console.log(res);
      },
      onError: err => console.log(err)
    })
  }

  return (
    <div>
      <DebtForm title={"qo'shish"} onsubmit={submit} />
    </div>
  )
}

export default Increase