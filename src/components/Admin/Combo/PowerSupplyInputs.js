import React, { useState, useEffect } from 'react'
import { Select, TextField, Typography, MenuItem, Box, InputLabel } from '@mui/material'

export const PowerSupplyInputs = ({ product, validate }) => {
    const [powerCertification, setPowerCertification] = useState("")
    const [powerSize, setPowerSize] = useState("")
    const [powerModular, setPowerModular] = useState("")

    useEffect(() => {
        setPowerSize(product?.combo_data?.power?.size)
        setPowerCertification(product?.combo_data?.power?.certification)
        setPowerModular(product?.combo_data?.power?.modular)
    }, [product])

    return (
        <Box component="div" sx={{
            mt: 1,
            maxWidth: "100%",
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5
        }}>
            <Typography component="h4" variant="h5">Datos Técnicos de la Fuente de Poder</Typography>
            <TextField disabled={!validate} required={validate} id="power_brand" fullWidth placeholder="Marca de la Fuente" label="Marca" defaultValue={product?.combo_data?.power?.brand} />
            <TextField disabled={!validate} required={validate} id="power_model" fullWidth placeholder="Modelo de la Fuente" label="Modelo" defaultValue={product?.combo_data?.power?.model} />
            <TextField disabled={!validate} required={validate} id="power_wattage" fullWidth placeholder="Wattage de la Fuente" label="Wattage" defaultValue={product?.combo_data?.power?.wattage} />

            <div>
                <InputLabel>Certificación</InputLabel>
                <Select disabled={!validate} required={validate} id="power_certification" name="power_certification" fullWidth value={powerCertification} onChange={e => setPowerCertification(e.target.value)}>
                    <MenuItem sx={{ fontSize: 14 }} value={"80 Plus"}>80 Plus</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"80 Plus Bronze"}>80 Plus Bronze</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"80 Plus Gold"}>80 Plus Gold</MenuItem>
                </Select>
            </div>
            <div>
                <InputLabel>Tamaño</InputLabel>
                <Select disabled={!validate} required={validate} id="power_size" name="power_size" fullWidth value={powerSize} onChange={e => setPowerSize(e.target.value)}>
                    <MenuItem sx={{ fontSize: 14 }} value={"ATX"}>ATX</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"Micro ATX"}>Micro ATX</MenuItem>
                </Select>
            </div>
            <div>
                <InputLabel>Modularidad</InputLabel>
                <Select disabled={!validate} required={validate} id="power_modular" name="power_modular" fullWidth value={powerModular} onChange={e => setPowerModular(e.target.value)}>
                    <MenuItem sx={{ fontSize: 14 }} value={false}>No Modular</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={true}>Modular</MenuItem>
                </Select>
            </div>
        </Box>
    )
}

