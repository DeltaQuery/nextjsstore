import React, { useState, useEffect } from 'react'
import { Select, TextField, Typography, MenuItem, Box, InputLabel } from '@mui/material'

export const RamInputs = ({ product }) => {
    const [ramGen, setRamGen] = useState("")
    const [ramForm, setRamForm] = useState("")
    const [ramCapacity, setRamCapacity] = useState("")

    useEffect(() => {
        setRamGen(product?.combo_data?.ram?.gen)
        setRamForm(product?.combo_data?.ram?.form)
        setRamCapacity(product?.combo_data?.ram?.capacity)
    }, [product])

    return (
        <Box component="div" sx={{
            mt: 1,
            maxWidth: "100%",
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5
        }}>
            <Typography component="h4" variant="h5">Datos Técnicos de la RAM</Typography>
            <TextField id="ram_brand" fullWidth placeholder="Marca de la RAM" label="Marca" defaultValue={product?.combo_data?.ram?.brand} />
            <TextField id="ram_model" fullWidth placeholder="Modelo de la RAM" label="Modelo" defaultValue={product?.combo_data?.ram?.model} />
            <div>
                <InputLabel>Capacidad</InputLabel>
                <Select id="ram_capacity" name="ram_capacity" fullWidth value={ramCapacity} onChange={e => setRamCapacity(e.target.value)}>
                    <MenuItem sx={{ fontSize: 14 }} value={"4GB"}>4GB</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"4GB X 2"}>4GB X 2</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"8GB"}>8GB</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"8GB X 2"}>8GB X 2</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"16GB"}>16GB</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"16GB X 2"}>16GB X 2</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"32B"}>32GB</MenuItem>
                </Select>
            </div>
            <div>
                <InputLabel>Generación</InputLabel>
                <Select id="ram_gen" name="ram_gen" fullWidth value={ramGen} onChange={e => setRamGen(e.target.value)}>
                    <MenuItem sx={{ fontSize: 14 }} value={"DDR4"}>DDR4</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"DDR3"}>DDR3</MenuItem>
                </Select>
            </div>
            <TextField id="ram_mhz" name="ram_mhz" type="number" fullWidth placeholder="Capacidad en MHz" label="Capacidad en MHz" defaultValue={product?.combo_data?.ram?.mhz} />
            <div>
                <InputLabel>Forma</InputLabel>
                <Select id="ram_form" name="ram_form" fullWidth value={ramForm} onChange={e => setRamForm(e.target.value)}>
                    <MenuItem sx={{ fontSize: 14 }} value={"Escritorio"}>Escritorio</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"Laptop"}>Laptop</MenuItem>
                </Select>
            </div>

        </Box>
    )
}