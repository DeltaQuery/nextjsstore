import React from 'react'
import { TextField, Typography, Box } from '@mui/material'

export const GraphicInputs = ({product, validate}) => {

    return (
        <Box component="div" sx={{
            mt: 1,
            maxWidth: "100%",
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5
        }}>
            <Typography component="h4" variant="h5">Datos Técnicos de la Tarjeta Gráfica</Typography>
            <TextField disabled={!validate} required={validate} id="graphic_brand" fullWidth placeholder="Marca de la Tarjeta Gráfica" label="Marca" defaultValue={product?.combo_data?.graphic?.brand}/>
            <TextField disabled={!validate} required={validate} id="graphic_model" fullWidth placeholder="Modelo de la Tarjeta Gráfica" label="Modelo" defaultValue={product?.combo_data?.graphic?.model}/>
            <TextField disabled={!validate} required={validate} id="graphic_ram" fullWidth placeholder="RAM de la Tarjeta Gráfica" label="RAM" defaultValue={product?.combo_data?.graphic?.ram}/>
            <TextField disabled={!validate} required={validate} id="graphic_gen" fullWidth placeholder="Gen de la RAM de la Tarjeta Gráfica" label="Gen de RAM" defaultValue={product?.combo_data?.graphic?.gen}/>
        </Box>
    )
}