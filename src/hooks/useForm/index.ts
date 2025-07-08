import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [formState, setFormState] = useState(initialState)

    interface FormState {
        [key: string]: string | number | boolean | undefined
    }

    interface HandleChangeEvent {
        target: {
            name: string
            value: string | number | boolean | undefined    
        }
    }

    const handleChange = (e: HandleChangeEvent): void => {
        const { name, value } = e.target
        setFormState((prev: FormState) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handlereset = () => {
        setFormState({ ...initialState })
    }

    
    return {
        formState,
        handleChange,
        handlereset
    }
}
