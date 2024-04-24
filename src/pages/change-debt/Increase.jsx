import React from 'react'
import DebtForm from '../../components/DebtForm';
import { useParams } from 'react-router-dom';
import { useAddPrice } from '../../service/mutation/useAddPrice';

const Increase = () => {
  const { id } = useParams()
  const { mutate } = useAddPrice()
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