import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
});
const TableRowPersonalizada = styled(TableRow)({
    backgroundColor: '#768087',
});
const TableCellTitulo = styled(TableCell)({
    fontWeight: 'bold',
    textAlign: 'center'
});
const TableCellLinhas = styled(TableCell)({
    textAlign: 'center'
});
const DIAS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
const TREINOS = ['Peito', 'Costas', 'Perna', 'Ombro', 'Braço', 'Fechado', 'Faltei', 'Folga', 'Folga S.', 'Folga D.'];
export default function Tabela({ rows }) {
    return (_jsx(Container, { children: _jsx(TableContainer, { component: Paper, children: _jsxs(Table, { sx: { minWidth: 650 }, "aria-label": "simple table", children: [_jsx(TableHead, { children: _jsxs(TableRowPersonalizada, { children: [_jsx(TableCellTitulo, { children: "Dia da semana" }), _jsx(TableCellTitulo, { align: "right", children: "Data" }), _jsx(TableCellTitulo, { align: "right", children: "Lembrete" }), _jsx(TableCellTitulo, { align: "right", children: "Notas" }), _jsx(TableCellTitulo, { align: "right", children: "Treino" }), _jsx(TableCellTitulo, { align: "right", children: "Leu hoje?" }), _jsx(TableCellTitulo, { align: "right", children: "Tirou foto?" }), _jsx(TableCellTitulo, { align: "right", children: "Foto" }), _jsx(TableCellTitulo, { align: "right", children: "Dieta?" }), _jsx(TableCellTitulo, { align: "right", children: "Lendo" })] }) }), _jsx(TableBody, { children: rows?.map((row) => (_jsxs(TableRow, { sx: { '&:last-child td, &:last-child th': { border: 0 } }, children: [_jsx(TableCellLinhas, { component: "th", scope: "row", children: DIAS[row.ddSemana] }), _jsx(TableCellLinhas, { align: "right", children: row.data.toLocaleString() }), _jsx(TableCellLinhas, { align: "right", children: row.lembrete }), _jsx(TableCellLinhas, { align: "right", children: row.notas }), _jsx(TableCellLinhas, { align: "right", children: TREINOS[row.treino] }), _jsx(TableCellLinhas, { align: "right", children: row.leuHoje ? 'Não' : 'Sim' }), _jsx(TableCellLinhas, { align: "right", children: row.dieta ? 'Não' : 'Sim' }), _jsx(TableCellLinhas, { align: "right", children: row.foto }), _jsx(TableCellLinhas, { align: "right", children: row.dieta ? 'Não' : 'Sim' }), _jsx(TableCellLinhas, { align: "right", children: row.lendo })] }, row.id))) })] }) }) }));
}
