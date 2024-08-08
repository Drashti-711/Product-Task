import { Button } from '@mantine/core'

interface ButtonProps {
    value: string;
    onClick?: () => void;
    disabled?: boolean
}
const Buttons = ({value} : ButtonProps) => {
    return (
        <Button variant='' >{value}</Button>
    )
}

export default Buttons