// import logo from './logo.svg';
import './App.css';
import List from './Classes/List';
// import Greet from './Components/Greet';
// import Welcome from './Classes/Welcome';
// import ClassState from './Classes/ClassState';
// import CounteClass from './Classes/CounteClass';
// import ButEle from './Components/Event/ButEle';
// import Event from './Classes/Event';
// import EventCls from './Classes/EventCls';
import ParanentCom from './Classes/ParanentCom';
import UserGreeting from './Classes/UserGreeting';
// import Hello from './Components/Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greet name="john" heroName="super hero" /> */}
        <ParanentCom />
        <UserGreeting />
        <List/>
         {/* <ClassState /> */}
         {/* <ButEle /> */}
         {/* <Event /> */}
         {/* <EventCls /> */}
         {/* <CounteClass/> */}
        {/* <Welcome name="jerry"/> */}
        {/* <Hello /> */}
      </header>
    </div>
  );
}

export default App;
