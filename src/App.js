import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionalClick from './Components/FunctionalClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import ChildComponent from './Components/ChildComponent';
import UserGreeting from './Components/UserGreeting';





function App() {
  return (
    <div className="App">
      <UserGreeting />
      {/* <ParentComponent /> */}
      {/* <EventBind></EventBind> */}
      {/* <FunctionalClick />
      <ClassClick /> */}
      {/* <Message />
      <Counter />
      <Greet name="diona" heroName="ironman" >
        <p>this is the childern prop</p>
      </Greet>
      <Greet name="dragon" heroName="spiderman" >
        <button>action</button>
      </Greet>
      <Greet name="diluc" heroName="ben10" />
      <Welcome name="diona" heroName="ironman" />
      <Welcome name="dragon" heroName="spiderman" />
      <Welcome name="diluc" heroName="ben10" >
        <p>hiiii</p>
      </Welcome>
      <Hello /> */}
    </div>
  );
}

export default App;
