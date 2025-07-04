import { Button } from '@/components/atoms/buttons'
import { Input } from '@/components/atoms/inputs'
import { useSession } from 'next-auth/react'
import React from 'react'
import styles from './styles.module.css'
import { Text } from '@/components/atoms/text'

export const RegisterPage = () => {
    const { data } = useSession()

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Text as='h1' variant='title'>
                    Login
                </Text>
                <Input className={styles.input} placeholder='usuario' />
                <Input className={styles.input} placeholder='contrasena' />
                <Input className={styles.input} placeholder='contrasena' />
                <Button type='submit'>
                    Login
                </Button>
            </form>
            <div>
                Componente 
            </div>
        </div>
    )
}
