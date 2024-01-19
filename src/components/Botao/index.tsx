import AddIcon from '@mui/icons-material/Add';
import { IconButton, styled } from '@mui/material';
import React from 'react';

const IconButtonEstilizado = styled(IconButton)({
    border: '1px',
    borderColor: '#5e5e5e',
    borderStyle: 'groove',
    width: '50px',
    height: '50px',
    marginTop: '6vh',
    marginRight: '1vw'
})
interface BotaoProps {
    onClick: () => void;
}

const Botao: React.FC<BotaoProps> = ({ onClick }) => {
    return (
        <IconButtonEstilizado color="default" aria-label="add" onClick={onClick}>
            <AddIcon />
        </IconButtonEstilizado>
    );
};

export default Botao;
