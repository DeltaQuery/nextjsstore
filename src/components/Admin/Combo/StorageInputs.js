import React, { useState, useEffect } from 'react'
import { Select, TextField, Typography, MenuItem, Box, InputLabel } from '@mui/material'

export const StorageInputs = ({ product, validate }) => {
    const [storageInterface, setStorageInterface] = useState("")
    const [storageCapacity, setStorageCapacity] = useState("")

    useEffect(() => {
        setStorageInterface(product?.combo_data?.storage?.interface)
        setStorageCapacity(product?.combo_data?.storage?.capacity)
    }, [product])

    return (
        <Box component="div" sx={{
            mt: 1,
            maxWidth: "100%",
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5
        }}>
            <Typography component="h4" variant="h5">Datos Técnicos del Disco de Almacenamiento</Typography>
            <TextField disabled={!validate} required={validate}  id="storage_brand" fullWidth placeholder="Marca de Disco" label="Marca" defaultValue={product?.combo_data?.storage?.brand} />
            <TextField disabled={!validate} required={validate}  id="storage_model" fullWidth placeholder="Modelo de Disco" label="Modelo" defaultValue={product?.combo_data?.storage?.model} />
            <div>
                <InputLabel>Interfaz</InputLabel>
                <Select disabled={!validate} required={validate}  id="storage_interface" name="storage_interface" fullWidth value={storageInterface} onChange={e => setStorageInterface(e.target.value)}>
                    <MenuItem sx={{ fontSize: 14 }} value={"SSD SATA"}>SSD SATA</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"M2 NVMe"}>M2 NVME</MenuItem>
                </Select>
            </div>
            <div>
                <InputLabel>Capacidad</InputLabel>
                <Select disabled={!validate} required={validate}  id="storage_capacity" name="storage_capacity" fullWidth value={storageCapacity} onChange={e => setStorageCapacity(e.target.value)}>
                    <MenuItem sx={{ fontSize: 14 }} value={"120 GB"}>120 GB</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"240 GB"}>240 GB</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"256 GB"}>256 GB</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"480 GB"}>480 GB</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"500 GB"}>500 GB</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"960 GB"}>960 GB</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"1TB"}>1TB</MenuItem>
                </Select>
            </div>
            <TextField disabled={!validate} required={validate}  id="storage_speed" name="storage_speed" fullWidth placeholder="Velocidad en MB/ps" label="Velocidad" defaultValue={product?.combo_data?.storage?.speed} />
        </Box>
    )
}