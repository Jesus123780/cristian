import { Button } from '@/components/atoms/buttons'
import { Input } from '@/components/atoms/inputs'
import { useSession } from 'next-auth/react'
import React from 'react'
import styles from './styles.module.css'
import { Text } from '@/components/atoms/text'
import Link from 'next/link'
import { ROUTES } from '@/utils'

export const RegisterPage = () => {
    const { data } = useSession()
    console.log("🚀 ~ RegisterPage ~ data:", data)

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className={styles.FatherContainer}>
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Text as='h1' variant='title'>
                    Registrate
                </Text>
                <Input className={styles.input} placeholder='usuario' />
                <Input type="email" className={styles.input} placeholder='correo' />
                <Input type="password" className={styles.input} placeholder='contrasena' />
                <Input type="password" className={styles.input} placeholder='confirmar contrasena' />
                <Button type='submit' className={styles.buttonSubmit}>
                    Registrate
                </Button>
            </form>
            <div>
                <Text as='p' variant='body'>
                    ¿Ya tienes una cuenta? <Link href={ROUTES.LOGIN}>Inicia sesión</Link>
                </Text>
            </div>
            <div>
                Componente 
            </div>
        </div>
        </div>
    )
}
