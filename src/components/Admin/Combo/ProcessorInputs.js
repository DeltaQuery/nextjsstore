import React, { useState, useEffect } from 'react'
import { Select, TextField, Typography, MenuItem, InputLabel, Box } from '@mui/material'

export const ProcessorInputs = ({ product }) => {
    const [processorFan, setProcessorFan] = useState("")

    useEffect(() => {
        setProcessorFan(product?.combo_data?.processor?.fan)
    }, [product])

    return (
        <Box component="div" sx={{
            mt: 1,
            maxWidth: "100%",
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5
        }}>
            <Typography component="h4" variant="h5">Datos Técnicos del Procesador</Typography>
            <TextField id="processor_brand" fullWidth placeholder="Marca del Procesador" label="Marca" defaultValue={product?.combo_data?.processor?.brand} />
            <TextField id="processor_model" fullWidth placeholder="Modelo de Procesador" label="Modelo" defaultValue={product?.combo_data?.processor?.model} />
            <TextField id="processor_socket" fullWidth placeholder="Socket" label="Socket" defaultValue={product?.combo_data?.processor?.socket} />
            <TextField id="processor_cores" fullWidth placeholder="Núcleos" label="Núcleos" defaultValue={product?.combo_data?.processor?.cores} />
            <TextField id="processor_threads" fullWidth placeholder="Hilos" label="Hilos" defaultValue={product?.combo_data?.processor?.threads} />
            <TextField id="processor_base_ghz" fullWidth placeholder="GHz Base" label="GHz Base" defaultValue={product?.combo_data?.processor?.base_ghz} />
            <TextField id="processor_turbo_ghz" fullWidth placeholder="GHz Turbo" label="GHz Turbo" defaultValue={product?.combo_data?.processor?.turbo_ghz} />
            <TextField id="processor_mhz" type="number" fullWidth placeholder="MHz soportados" label="MHz soportados" defaultValue={product?.combo_data?.processor?.mhz} />
            <div>
                <InputLabel>Ventilador</InputLabel>
                <Select id="processor_fan" name="processor_fan" fullWidth value={processorFan} onChange={e => setProcessorFan(e.target.value)}>
                    <MenuItem sx={{ fontSize: 14 }} value={true}>Incluido</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={false}>No Incluido</MenuItem>
                </Select>
            </div>

        </Box>
    )
}