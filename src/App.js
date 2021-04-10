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
import NameList from './Components/NameList';
import StyleSheet from './Components/StyleSheet';
import Inline from './Components/Inline';
import './Components/AppStyle.css'
import styles from './Components/AppStyle.module.css'
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import FRparentinput from './Components/FRparentinput';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';




function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <Hero heroName='bruce' />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName='joker' />
      </ErrorBoundary>
      
      {/* <PortalDemo /> */}
      {/* <FRparentinput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <Table /> */}
      {/* <ParentComp /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <StyleSheet primary = {true} />
      <Inline />
      <h1 className='sucess'>sucess</h1>
      <h1 className={styles.error}>module style</h1> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
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
