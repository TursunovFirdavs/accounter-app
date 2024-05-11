import React from 'react'
import DebtForm from '../../components/DebtForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useChangePrice } from '../../service/mutation/useChangePrice';

const Decrease = () => {
  const { id } = useParams()
  const { mutate, isPending } = useChangePrice()
  const navigate = useNavigate()

  const submit = (data) => {
    mutate({...data, type: 'SUB', store:id}, {
      onSuccess: (res) => {
        navigate(-1)
      },
      onError: err => console.log(err)
    })
  }

  return (
    <div>
        <DebtForm title={'ayirish'} onsubmit={submit} loading={isPending} />
    </div>
  )
}

export default Decrease