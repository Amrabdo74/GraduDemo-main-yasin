import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const MyTable = ({ data, headerLabels }) => {
    // console.log(data);
    // const headerLabels = Object.keys(data[0]);

    return (
        <TableContainer className='table-container'>
            <div className="table-header">
                <span className='table-title'>Table Title</span>
            </div>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow className='table-row'
                        sx={{ 'td, th': { border: 0 } }}>
                        <TableCell className='table-head-cell'>Dessert (100g serving)</TableCell>
                        <TableCell className='table-head-cell'>Calories</TableCell>
                        <TableCell className='table-head-cell'>Fat&nbsp;(g)</TableCell>
                        <TableCell className='table-head-cell'>Carbs&nbsp;(g)</TableCell>
                        <TableCell className='table-head-cell'>Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name} className='table-row'
                            sx={{ 'td, th': { border: 0 } }}>
                            <TableCell className='row-cell'>
                                {row.name}
                            </TableCell>
                            <TableCell className='row-cell'>{row.calories}</TableCell>
                            <TableCell className='row-cell'>{row.fat}</TableCell>
                            <TableCell className='row-cell'>{row.carbs}</TableCell>
                            <TableCell className='row-cell'>{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MyTable;