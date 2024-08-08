import { MantineReactTable, MRT_ColumnDef, useMantineReactTable } from 'mantine-react-table'

type Person = { name: string, id: number }

interface TableProps {
    columns: MRT_ColumnDef[],
    data: Person[],
    renderRowActions: any
}
const GlobalTable = ({ renderRowActions, columns, data=[] }: TableProps) => {

    const tableOption = useMantineReactTable({
        columns,
        data,
        enableRowActions: true,
        enableEditing: true,
        renderRowActions: renderRowActions,
        
    })
    return (
        <>
            <MantineReactTable table={tableOption} />
        </>
    )
}

export default GlobalTable