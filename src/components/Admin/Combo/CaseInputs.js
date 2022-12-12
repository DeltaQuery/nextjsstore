import React, { useState, useEffect } from 'react'
import { Select, TextField, Typography, MenuItem, Box, InputLabel } from '@mui/material'

export const CaseInputs = ({ product }) => {
    const [caseSize, setCaseSize] = useState("")
    const [caseMaterial, setCaseMaterial] = useState("")

    useEffect(() => {
        setCaseMaterial(product?.combo_data?.case?.material)
        setCaseSize(product?.combo_data?.case?.size)
    }, [product])

    return (
        <Box component="div" sx={{
            mt: 1,
            maxWidth: "100%",
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5
        }}>
            <Typography component="h4" variant="h5">Datos Técnicos del Case</Typography>
            <TextField id="case_brand" fullWidth placeholder="Marca de Case" label="Marca" defaultValue={product?.combo_data?.case?.brand} />
            <TextField id="case_model" fullWidth placeholder="Modelo de Case" label="Modelo" defaultValue={product?.combo_data?.case?.model} />
            <div>
                <InputLabel>Tamaño de Case</InputLabel>
                <Select id="case_size" name="case_size" fullWidth value={caseSize} onChange={e => setCaseSize(e.target.value)}>
                    <MenuItem sx={{ fontSize: 14 }} value={"Mid Tower"}>Mid Tower</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"Full Tower"}>Full Tower</MenuItem>
                </Select>
            </div>
            <div>
                <InputLabel>Material de Case</InputLabel>
                <Select id="case_material" name="case_material" fullWidth value={caseMaterial} onChange={e => setCaseMaterial(e.target.value)}>
                    <MenuItem sx={{ fontSize: 14 }} value={"Acrílico"}>Acrílico</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"Vidrio templado"}>Vidrio templdo</MenuItem>
                    <MenuItem sx={{ fontSize: 14 }} value={"No aplica"}>No aplica</MenuItem>
                </Select>
            </div>

        </Box>
    )
}