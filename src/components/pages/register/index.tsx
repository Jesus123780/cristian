'use client';

import { Button } from '@/components/atoms/buttons';
import { Input } from '@/components/atoms/inputs';
import React from 'react';
import { Text } from '@/components/atoms/text';
import Link from 'next/link';
import { ROUTES } from '@/utils';
import { useForm } from '@/hooks/useForm';
import styles from './styles.module.css';

export const RegisterPage = () => {
    const initialState = {
        usuario: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    
    const { formState, handleChange, handlereset } = useForm(initialState)

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación básica
        if (formState.password !== formState.confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Aquí podrías enviar los datos a un backend o API
        console.log({
            usuario: formState.usuario,
            email: formState.email,
            password: formState.password
        })
        handlereset()
    };

    return (
        <div className={styles.FatherContainer}>
            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <Text as='h1' variant='title'>Regístrate</Text>
                    <Input
                        className={styles.input}
                        placeholder='Usuario'
                        name='usuario'
                        value={formState.usuario}
                        onChange={(e) =>  {
                            handleChange(e);
                            
                        }}
                    />

                    <Input
                        type="email"
                        className={styles.input}
                        placeholder='Correo'
                        name='email'
                        value={formState.email}
                        onChange={handleChange}
                    />

                    <Input
                        type="password"
                        className={styles.input}
                        placeholder='Contraseña'
                        name='password'
                        value={formState.password}
                        onChange={handleChange}
                    />

                    <Input
                        type="password"
                        name='confirmPassword'
                        className={styles.input}
                        placeholder='Confirmar contraseña'
                        value={formState.confirmPassword}
                        onChange={handleChange}
                    />

                    <Button type='submit' className={styles.buttonSubmit}>
                        Registrarse
                    </Button>
                </form>

                <div className={styles.text}>
                    <Text as='p' variant='body'>
                        ¿Ya tienes una cuenta?
                        <Link href={ROUTES.LOGIN}>
                            <span className={styles.link}> Inicia sesión</span>
                        </Link>
                    </Text>
                </div>

                <div>
                    Componente
                </div>
            </div>
        </div>
    );
};
