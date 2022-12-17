import React from 'react'
import { TextField, Typography, Box } from '@mui/material'

export const CoolerInputs = ({product, validate}) => {

    return (
        <Box component="div" sx={{
            mt: 1,
            maxWidth: "100%",
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5
        }}>
            <Typography component="h4" variant="h5">Datos Técnicos del Fan Cooler</Typography>
            <TextField disabled={!validate} required={validate} id="cooler_brand" fullWidth placeholder="Marca del Fan Cooler" label="Marca" defaultValue={product?.combo_data?.cooler?.brand}/>
            <TextField disabled={!validate} required={validate} id="cooler_model" fullWidth placeholder="Modelo del Fan Cooler" label="Modelo" defaultValue={product?.combo_data?.cooler?.model} />
            <TextField disabled={!validate} required={validate} id="cooler_size" fullWidth placeholder="Dimensiones del Fan Cooler" label="Dimensiones" defaultValue={product?.combo_data?.cooler?.size} />
            <TextField disabled={!validate} required={validate} id="cooler_sockets" fullWidth placeholder="Sockets soportados" label="Sockets" defaultValue={product?.combo_data?.cooler?.sockets} />
        </Box>
    )
}