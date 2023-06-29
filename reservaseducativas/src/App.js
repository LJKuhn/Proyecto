import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    documentId: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    room: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos del formulario
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Documento de identidad"
        name="documentId"
        value={formData.documentId}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Nombre"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Apellido"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Teléfono"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Aula o laboratorio"
        name="room"
        value={formData.room}
        onChange={handleChange}
        fullWidth
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Reservar
      </Button>
    </form>
  );
};

export default ReservationForm;
