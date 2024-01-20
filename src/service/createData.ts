export default function createData(
  id: number,
  ddSemana: string | number,
  data: Date,
  lembrete: string | number,
  notas: string | number,
  treino: string | number,
  leuHoje: boolean,
  tirouFoto: boolean,
  foto: string | number,
  dieta: boolean,
  lendo: string | number
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
  }
}
