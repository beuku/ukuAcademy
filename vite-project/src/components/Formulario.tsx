import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Container,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    comment: string;
}

const Formulario: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        comment: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        // Aquí podrías guardar los datos en Firebase o cualquier backend.
    };

    return (
        <Container sx={{
            paddingY: '2rem',
        }}>
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
                <Typography variant="h5" mb={2} color='#FFFFFF' textAlign="center">
                    Formulario de Contacto
                </Typography>
                <Grid container spacing={2}>
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
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }} textAlign="center">
                        <Button type="submit" variant="contained">
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Formulario;
