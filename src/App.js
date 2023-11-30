import logo from './logo.svg';
import './App.css';
// import Greet from './Components/Greet';
import Welcome from './Classes/Welcome';
import ClassState from './Classes/ClassState';
// import Hello from './Components/Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greet name="john" heroName="super hero" /> */}
         <ClassState />
        <Welcome name="jerry"/>
        {/* <Hello /> */}
      </header>
    </div>
  );
}

export default App;
