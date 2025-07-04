import { Button } from '@/components/atoms/buttons'
import { Input } from '@/components/atoms/inputs'
import { useSession } from 'next-auth/react'
import React from 'react'

export const LoginPage = () => {
    const { data } = useSession()

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input placeholder='usuario' />
                <Input placeholder='contrasena' />
                <Button type='submit'>
                    Login
                </Button>
            </form>
        </div>
    )
}
