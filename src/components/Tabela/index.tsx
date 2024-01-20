import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material';

const Container = styled('div')({
    width: '99vw',
    marginTop: '2vh'
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

interface Row {
    id: number;
    ddSemana: string;
    data: Date;
    notas: string;
    treino: string;
    leuHoje: boolean;
    dieta: boolean;
    foto: string;
    lendo: string;
}

const DIAS: string[] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex']
const TREINOS: string[] = ['Peito', 'Costas', 'Perna', 'Ombro', 'Braço', 'Fechado', 'Faltei', 'Folga', 'Folga S.', 'Folga D.']

export default function Tabela({ rows }: { rows: Row[] }) {
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
                        {rows?.map((row: any) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCellLinhas component="th" scope="row">
                                    {DIAS[row.ddSemana]}
                                </TableCellLinhas>
                                <TableCellLinhas align="right">{row.data.toLocaleString()}</TableCellLinhas>
                                <TableCellLinhas align="right">{row.lembrete}</TableCellLinhas>
                                <TableCellLinhas align="right">{row.notas}</TableCellLinhas>
                                <TableCellLinhas align="right">{TREINOS[row.treino]}</TableCellLinhas>
                                <TableCellLinhas align="right">{row.leuHoje ? 'Não' : 'Sim'}</TableCellLinhas>
                                <TableCellLinhas align="right">{row.dieta ? 'Não' : 'Sim'}</TableCellLinhas>
                                <TableCellLinhas align="right">{row.foto}</TableCellLinhas>
                                <TableCellLinhas align="right">{row.dieta ? 'Não' : 'Sim'}</TableCellLinhas>
                                <TableCellLinhas align="right">{row.lendo}</TableCellLinhas>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Container>
    );
}