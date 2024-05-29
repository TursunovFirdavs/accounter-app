import React from 'react'
import DebtForm from '../../components/DebtForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useChangePrice } from '../../service/mutation/useChangePrice';

const Increase = () => {
  const { id } = useParams()
  const { mutate, isPending } = useChangePrice()
  const navigate = useNavigate()
  
  const submit = (data) => {
    mutate({...data, type: 'ADD', store:id}, {
      onSuccess: (res) => {
        navigate(-1)
      },
      onError: err => console.log(err)
    })
  }

  return (
    <div className='h-[80vh]'>
      <DebtForm title={"qo'shish"} onsubmit={submit} loading={isPending} />
    </div>
  )
}

export default Increase