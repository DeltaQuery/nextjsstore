import React from 'react'
import { TextField, Typography, Box } from '@mui/material'

export const MotherboardInputs = ({product, validate}) => {

    return (
        <Box component="div" sx={{
            mt: 1,
            maxWidth: "100%",
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5
        }}>
            <Typography component="h4" variant="h5">Datos Técnicos de la Placa Madre</Typography>
            <TextField disabled={!validate} required={validate} id="mobo_brand" fullWidth placeholder="Marca de la Placa Madre" label="Marca" defaultValue={product?.combo_data?.mobo?.brand}/>
            <TextField disabled={!validate} required={validate} id="mobo_model" fullWidth placeholder="Modelo de la Placa Madre" label="Modelo" defaultValue={product?.combo_data?.mobo?.brand}/>
            <TextField disabled={!validate} required={validate} id="mobo_socket" fullWidth placeholder="Socket" label="Socket" defaultValue={product?.combo_data?.mobo?.socket}/>
            <TextField disabled={!validate} required={validate} id="mobo_mhz" type="number" fullWidth placeholder="MHz soportados" label="MHz soportados" defaultValue={product?.combo_data?.mobo?.mhz}/>
            <TextField disabled={!validate} required={validate} id="mobo_ram_slots" type="number" fullWidth placeholder="Slots de RAM" label="Slots de RAM" defaultValue={product?.combo_data?.mobo?.ram_slots}/>
            <TextField disabled={!validate} required={validate} id="mobo_sata_slots" type="number" fullWidth placeholder="Slots SATA" label="Slots SATA" defaultValue={product?.combo_data?.mobo?.sata_slots}/>
            <TextField disabled={!validate} required={validate} id="mobo_m2_slots" type="number" fullWidth placeholder="Slots M2" label="Slots M2" defaultValue={product?.combo_data?.mobo?.m2_slots}/>
        </Box>
    )
}