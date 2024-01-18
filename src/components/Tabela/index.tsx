import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material';

function createData(
    id: string,
    ddSemana: string,
    data: Date,
    lembrete: string,
    notas: string,
    treino: string,
    leuHoje: boolean,
    tirouFoto: boolean,
    foto: string,
    dieta: boolean,
    lendo: string,
) {
    return {
        id,
        ddSemana,
        data,
        lembrete,
        notas,
        treino,
        leuHoje,
        tirouFoto,
        foto,
        dieta,
        lendo
    };
}

const hoje = new Date()

const rows = [
    createData('1', 'Sex', hoje, 'Aniversário de casamento', 'dia feliz', 'Braço', true, true,
        'http://google.com',
        true,
        'O milagre do amanhã'),
];

const Container = styled('div')({
    width: '99vw',
    // height: '100vh',
})

const TableRowPersonalizada = styled(TableRow)({
    backgroundColor: '#768087',

})

const TableCellTitulo = styled(TableCell)({
    fontWeight: 'bold',
    textAlign: 'center'
})

const TableCellLinhas = styled(TableCell)({
    textAlign: 'center'
})
export default function Tabela() {
    return (
        <Container>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRowPersonalizada>
                            <TableCellTitulo >Dia da semana</TableCellTitulo>
                            <TableCellTitulo align="right">Data</TableCellTitulo>
                            <TableCellTitulo align="right">Lembrete</TableCellTitulo>
                            <TableCellTitulo align="right">Notas</TableCellTitulo>
                            <TableCellTitulo align="right">Treino</TableCellTitulo>
                            <TableCellTitulo align="right">Leu hoje?</TableCellTitulo>
                            <TableCellTitulo align="right">Tirou foto?</TableCellTitulo>
                            <TableCellTitulo align="right">Foto</TableCellTitulo>
                            <TableCellTitulo align="right">Dieta?</TableCellTitulo>
                            <TableCellTitulo align="right">Lendo</TableCellTitulo>
                        </TableRowPersonalizada>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCellLinhas component="th" scope="row">
                                    {row.ddSemana}
                                </TableCellLinhas>
                                <TableCellLinhas align="right">{row.data.toLocaleString()}</TableCellLinhas>
                                <TableCellLinhas align="right">{row.notas}</TableCellLinhas>
                                <TableCellLinhas align="right">{row.notas}</TableCellLinhas>
                                <TableCellLinhas align="right">{row.treino}</TableCellLinhas>
                                <TableCellLinhas align="right">{row.leuHoje ? 'sim' : 'não'}</TableCellLinhas>
                                <TableCellLinhas align="right">{row.dieta ? 'sim' : 'não'}</TableCellLinhas>
                                <TableCellLinhas align="right">{row.foto}</TableCellLinhas>
                                <TableCellLinhas align="right">{row.dieta ? 'sim' : 'não'}</TableCellLinhas>
                                <TableCellLinhas align="right">{row.lendo}</TableCellLinhas>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Container>
    );
}