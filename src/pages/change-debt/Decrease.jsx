import React from 'react'
import DebtForm from '../../components/DebtForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useChangePrice } from '../../service/mutation/useChangePrice';

const Decrease = () => {
  const { id } = useParams()
  const { mutate } = useChangePrice()
  const navigate = useNavigate()

  const submit = (data) => {
    console.log({...data, type: 'SUB', store:id});
    mutate({...data, type: 'SUB', store:id}, {
      onSuccess: (res) => {
        console.log(res);
        navigate(`/single/${id}`)
      },
      onError: err => console.log(err)
    })
  }

  return (
    <div>
        <DebtForm title={'ayirish'} onsubmit={submit} />
    </div>
  )
}

export default Decrease