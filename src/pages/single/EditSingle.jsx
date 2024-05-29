import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useEditUser } from '../../service/mutation/useEditUser'
import { useGetSingleUser } from '../../service/query/useGetSingleUser'
import ClientForm from '../../components/ClientForm'

const EditSingle = () => {
    const { id } = useParams()
    const { register, handleSubmit, setValue } = useForm()
    const { mutate } = useEditUser(id)
    const navigate = useNavigate()
    const { data, isLoading } = useGetSingleUser(id)
    const submit = (data) => {
        mutate(data, {
            onSuccess: (res) => {
                navigate('/profile')
            },
            onError: err => console.log(err)
        })
    }

    return (
        <div className='pb-1'>
            <ClientForm submit={submit} initialValue={data} />
        </div>
    )
}

export default EditSingle