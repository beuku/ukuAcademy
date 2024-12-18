import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface RowData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comment: string;
  gender: string;
}

const Listado: React.FC = () => {
  const [rows, setRows] = useState<RowData[]>([]);
  const [selectionModel, setSelectionModel] = useState<string[]>([]);
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'firstName', headerName: 'Nombre', width: 130 },
    { field: 'lastName', headerName: 'Apellido', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Telefono', width: 130 },
    { field: 'gender', headerName: 'Genero', width: 100 },
    { field: 'comment', headerName: 'Comentario', width: 250 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/');
        const formattedData = response.data.map((item: any) => ({
          id: item._id,
          ...item,
        }));
        setRows(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = () => {
    if (selectionModel.length === 1) {
      const selectedId = selectionModel[0];
      navigate(`/editar/${selectedId}`);
    } else {
      alert('Por favor selecciona un solo elemento para editar');
    }
  };

  const handleDeleteSelected = async () => {
    if (
      selectionModel.length === 0 ||
      !window.confirm('¿Estás seguro de que deseas eliminar los elementos seleccionados?')
    ) {
      return;
    }

    try {
      const response = await axios.delete('http://localhost:4000/', {
        data: { ids: selectionModel },
      });

      alert(response.data.message);

      setRows((prevRows) => prevRows.filter((row) => !selectionModel.includes(row.id)));
      setSelectionModel([]);
    } catch (error) {
      console.error('Error al eliminar los elementos:', error);
      alert('Error al eliminar los elementos');
    }
  };
  
  const handleBack = async()=>{
    navigate("/");
  };

  return (
    <>
      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
          onRowSelectionModelChange={(newSelection) => setSelectionModel(newSelection as string[])}
        />
      </Paper>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handleEdit}>
          Editar
        </Button>
        <Button variant="contained" onClick={handleDeleteSelected}>
          Borrar
        </Button>
        <Button variant="contained" onClick={handleBack}>
          Volver al formulario
        </Button>
      </Stack>
    </>
  );
};

export default Listado;
