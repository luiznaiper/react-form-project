import React from 'react';
import useForm from '../hooks/useForm';
import Button from './Button';
import Input from './Input';

const UserForm = ({ submit }) => {
  const [form, handleChange, reset] = useForm({
    name: '',
    lastName: '',
    email: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(form);
    reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
      />
      <Input
        label="Last Name"
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="Your Last Name"
      />
      <Input
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
      />
      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;
