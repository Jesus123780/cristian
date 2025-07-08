import { Button } from '@/components/atoms/buttons'
import { Input } from '@/components/atoms/inputs'
import { useSession } from 'next-auth/react'
import styles from './styles.module.css'
import React from 'react'
import { Text } from '@/components/atoms/text'
import Link from 'next/link'
import { ROUTES } from '@/utils'

export const LoginPage = () => {
    const { data } = useSession()

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className={styles.container}>
            <Text variant='title' as='h1'>
                Iniciar sesión
            </Text>
            <form onSubmit={handleSubmit} className={styles.inputLogin}>
                <Input className={styles.input} placeholder='usuario' />
                <Input
                    className={styles.input}
                    type='password'
                    placeholder='contrasena'
                />
                <Button className={styles.button} type='submit'>
                    Login
                </Button>
            </form>
            <div className={styles.text}>
                <Text as='p' variant='body'>
                    ¿No tienes una cuenta?
                    <Link href={ROUTES.REGISTER}>
                        <span className={styles.link}>
                            Regístrate
                        </span>
                    </Link>
                </Text>
            </div>
        </div>
    )
}
