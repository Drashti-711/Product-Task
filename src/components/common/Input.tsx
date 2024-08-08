import { InputProps, TextInput } from '@mantine/core'
import { Controller, useFormContext } from 'react-hook-form'

interface TextInputProps extends InputProps {
    label: string;
    placeholder?: string;
    name: string;
    props?: any
}

const Input = ({ label, placeholder = "", name, props }: TextInputProps) => {

    const { control } = useFormContext()
    console.log({ name, label, placeholder })
    return (
        <>
            <Controller
                name={name}
                control={control}
                defaultValue={''}
                render={({ field: { onChange, onBlur, value, ref, }, fieldState: { error } }) => {
                    return <TextInput
                        name={name}
                        value={value}
                        label={label}
                        placeholder={`Enter ${placeholder}`}
                        onChange={onChange}
                        onBlur={onBlur}
                        ref={ref}
                        error={error?.message}
                        // error={errors}
                        {...props}
                    />
                }} />
        </>
    )
}

export default Input