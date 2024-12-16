import React, { useState } from 'react';
import axios from 'axios';
import {
    Box,
    TextField,
    Button,
    Typography,
    Container,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    SelectChangeEvent
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    comment: string;
    gender: string;
}

const Formulario: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        comment: '',
        gender: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleChangeSelect = (e: SelectChangeEvent) => {
        const { value } = e.target;
        setFormData({
            ...formData,
            gender: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        try {
            const response = await axios.post('http://localhost:4000/', formData);

            if (response.status === 200) {
                alert('Formulario enviado correctamente');
            }
        } catch (error) {
            console.log('Error al enviar el formulario: ', error);
            alert('Error al enviar el formulario');
        }
    };

    const handleGo = () => {
        navigate('/Listado');
    };

    return (
        <Container
            sx={{
                paddingY: '2rem',
            }}
        >
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    maxWidth: 500,
                    margin: '0 auto',
                    padding: 2,
                    backgroundColor: '#1E1E1E',
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Typography variant="h5" mb={2} color="#FFFFFF" textAlign="center">
                    Formulario de Contacto
                </Typography>
                <Grid container spacing={2} >
                    <Grid size={{ xs: 12 }}>
                        <TextField
                            label="Nombre"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextField
                            label="Apellido"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextField
                            label="Correo Electrónico"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextField
                            label="Teléfono"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextField
                            label="Comentario"
                            name="comment"
                            value={formData.comment}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Género</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChangeSelect}
                                label="Género"
                            >
                                <MenuItem value="masculino">Masculino</MenuItem>
                                <MenuItem value="femenino">Femenino</MenuItem>
                                <MenuItem value="otro">Otro</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12 }} textAlign="center">
                        <Button type="submit" variant="contained">
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </Box>
                <Grid size={{ xs: 12 }} textAlign="center">
                    <Button type="submit" variant="contained" onClick={handleGo}>
                        Ir al Listado
                    </Button>
                </Grid>
        </Container>
    );
};

export default Formulario;
