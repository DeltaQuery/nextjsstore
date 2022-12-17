import React, { useState, useEffect } from 'react'
import { Select, TextField, Typography, MenuItem, InputLabel, Box } from '@mui/material'

export const ProcessorInputs = ({ product, validate }) => {
    const [processorFan, setProcessorFan] = useState("")
    const [processorGraphics, setProcessorGraphics] = useState("")

    useEffect(() => {
        setProcessorFan(product?.combo_data?.processor?.fan)
        setProcessorGraphics(product?.combo_data?.processor?.graphics)
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
            <TextField disabled={!validate} required={validate} id="processor_brand" fullWidth placeholder="Marca del Procesador" label="Marca" defaultValue={product?.combo_data?.processor?.brand} />
            <TextField disabled={!validate} required={validate} id="processor_model" fullWidth placeholder="Modelo de Procesador" label="Modelo" defaultValue={product?.combo_data?.processor?.model} />
            <TextField disabled={!validate} required={validate} id="processor_socket" fullWidth placeholder="Socket" label="Socket" defaultValue={product?.combo_data?.processor?.socket} />
            <TextField disabled={!validate} required={validate} id="processor_cores" fullWidth placeholder="Núcleos" label="Núcleos" defaultValue={product?.combo_data?.processor?.cores} />
            <TextField disabled={!validate} required={validate} id="processor_threads" fullWidth placeholder="Hilos" label="Hilos" defaultValue={product?.combo_data?.processor?.threads} />
            <TextField disabled={!validate} required={validate} id="processor_base_ghz" fullWidth placeholder="GHz Base" label="GHz Base" defaultValue={product?.combo_data?.processor?.base_ghz} />
            <TextField disabled={!validate} required={validate} id="processor_turbo_ghz" fullWidth placeholder="GHz Turbo" label="GHz Turbo" defaultValue={product?.combo_data?.processor?.turbo_ghz} />
            <TextField disabled={!validate} required={validate} id="processor_mhz" type="number" fullWidth placeholder="MHz soportados" label="MHz soportados" defaultValue={product?.combo_data?.processor?.mhz} />
            <div>
                <InputLabel>Ventilador</InputLabel>
                <Select disabled={!validate} required={validate} id="processor_fan" name="processor_fan" fullWidth value={processorFan} onChange={e => setProcessorFan(e.target.value)}>
                    <MenuItem sx={{ fontSize: 14 }} value={true}>Incluido</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={false}>No Incluido</MenuItem>
                </Select>
            </div>
            <div>
                <InputLabel>Gráficos</InputLabel>
                <Select disabled={!validate} required={validate} id="processor_graphics" name="processor_graphics" fullWidth value={processorGraphics} onChange={e => setProcessorGraphics(e.target.value)}>
                    <MenuItem sx={{ fontSize: 14 }} value={true}>Integrados</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={false}>No Incluidos</MenuItem>
                </Select>
            </div>

        </Box>
    )
}