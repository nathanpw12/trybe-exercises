import './App.css';

// const arrayCompromissos = ['course', 'aula', 'exercício']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <>
    <Task/>
    </>
  );
}

export default App;
