import { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Container from './components/Container';
import Input from './components/Input';
import useForm from './hooks/useForm';

const App = () => {
  const [users, setUsers] = useState([]);

  const [form, handleChange, reset] = useForm({
    name: '',
    lastName: '',
    email: '',
  });
  const submitForm = (e) => {
    e.preventDefault();
    setUsers([...users, form]);
    reset();
  };
  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form onSubmit={submitForm}>
            <Input
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              label="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
            <Input
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <Button>Enviar</Button>
          </form>
        </div>
      </Card>
      <Card>
        <ul>
          {users.map((user) => (
            <li key={user.email}>
              {user.name} {user.lastName} : {user.email}
            </li>
          ))}
        </ul>
      </Card>
    </Container>
  );
};

export default App;
