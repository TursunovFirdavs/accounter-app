import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useCreateUser } from '../../service/mutation/useCreateUser'
import { loadState } from '../../storage'
import { useNavigate, useParams } from 'react-router-dom'
import ClientForm from '../../components/ClientForm'

const createClient = () => {

  const { toggle } = useParams()
  console.log(toggle);
  const { mutate, isPending } = useCreateUser()
  const navigate = useNavigate()

  const submit = (data) => {
    const currentData = {
      ...data,
      total_debt_uzs: data.unpaid_debt_uzs.length ? data.unpaid_debt_uzs : 0,
      unpaid_debt_uzs: data.unpaid_debt_uzs.length ? data.unpaid_debt_uzs : 0,
      total_debt_usd: data.unpaid_debt_usd.length ? data.unpaid_debt_usd : 0,
      unpaid_debt_usd: data.unpaid_debt_usd.length ? data.unpaid_debt_usd : 0,
      info: toggle == 'true' ? 'lend' : 'borrow'
    };
    mutate(currentData, {
      onSuccess: (res) => {
        navigate('/profile')
      },
      onError: err => console.log(err)
    })
  }

  return (
    <div className='pb-7'>
      <ClientForm toggle={toggle} submit={submit} loading={isPending}  />
    </div>
  )
}

export default createClient