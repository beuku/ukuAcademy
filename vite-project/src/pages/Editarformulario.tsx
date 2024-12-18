import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Box, Typography, Container, Grid, MenuItem, Select, SelectChangeEvent, FormControl, InputLabel, } from '@mui/material';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    comment: string;
    gender: string;
}

const EditarFormulario: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      comment: '',
      gender: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const handleChangeSelect = (event: SelectChangeEvent) => {
      const { value } = event.target;
      setFormData({ ...formData, gender: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await axios.put(`http://localhost:4000/${id}`, formData);
        alert('Formulario actualizado correctamente');
        navigate('/Listado');
      } catch (error) {
        console.error('Error al actualizar:', error);
        alert('Error al actualizar el formulario');
      }
  };
  const handleBack = () => {
      navigate('/Listado');
  };

  return (
    <Container>
      <Box component="form" sx={{ padding: 4, maxWidth: 500, margin: 'auto' }} onSubmit={handleSubmit}>
        <Typography variant="h5" mb={2}>
          Editar Formulario
        </Typography>
        <Grid container spacing={2} >
          <Grid item xs={12}>
            <TextField
              label="Nombre"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Apellido"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
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
          <Grid item xs={12}>
            <TextField
              label="Teléfono"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
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
          <Grid item xs={12}>
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
          <Grid item xs={12} textAlign="center">
            <Button type="submit" variant="contained">
              Guardar Cambios
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Grid item xs={12} textAlign="center">
        <Button type="submit" variant="contained" onClick={handleBack}>
          Cancelar y volver
        </Button>
      </Grid>
    </Container>
  );
};

export default EditarFormulario;
