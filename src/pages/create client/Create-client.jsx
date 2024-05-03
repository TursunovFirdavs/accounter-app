import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useCreateUser } from '../../service/mutation/useCreateUser'
import { loadState } from '../../storage'
import { useNavigate } from 'react-router-dom'
import ClientForm from '../../components/ClientForm'

const createClient = () => {
  const [use, setUse] = useState(0)

  const { mutate } = useCreateUser()
  const navigate = useNavigate()

  const submit = (data) => {
    const currentData = {
      ...data,
      total_debt_uzs: data.unpaid_debt_uzs.length ? data.unpaid_debt_uzs : 0,
      unpaid_debt_uzs: data.unpaid_debt_uzs.length ? data.unpaid_debt_uzs : 0,
      total_debt_usd: data.unpaid_debt_usd.length ? data.unpaid_debt_usd : 0,
      unpaid_debt_usd: data.unpaid_debt_usd.length ? data.unpaid_debt_usd : 0,
    };
    mutate(currentData, {
      onSuccess: (res) => {
        navigate('/profile')
      },
      onError: err => console.log(err)
    })
  }

  return (
    <div>
      <ClientForm submit={submit} />
    </div>
  )
}

export default createClient