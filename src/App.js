import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  return ( 
  <div className ="main-container">
    <Header><Nav/></Header>
  <About></About>
  <Footer></Footer>
  </div>
  );
}

export default App;
