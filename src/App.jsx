import { useState } from 'react';
import Card from './components/Card';
import Container from './components/Container';
import UserForm from './components/UserForm';

const App = () => {
  const [users, setUsers] = useState([]);

  const submitForm = (user) => {
    setUsers([...users, user]);
  };
  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submitForm} />
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
    </div>
  );
};

export default App;
