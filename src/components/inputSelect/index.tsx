import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material';

export default function InputSelect({ valores, label }: { valores?: string[]; label?: string }) {
    const [value, setValue] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);
    };

    const FormControllEstilizado = styled(FormControl)({
        width: '17vw',
        marginLeft: '1vw',
        marginTop: '1vh'
    })

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControllEstilizado >
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    onChange={handleChange}
                >
                    {
                        valores?.map((valor: string, index: number) =>
                            <MenuItem value={index}>{valor}</MenuItem>
                        )
                    }
                </Select>
            </FormControllEstilizado>
        </Box>
    );
}