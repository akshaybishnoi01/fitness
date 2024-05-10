import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Second from './components/Second'
import Section_3 from './components/Section_3';
import Section_4 from './components/Section_4';
import Section_five from './components/Section_five';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
function App() {
  return (
    <>
      <Header />
      <Second />
      <Section_3 />
      <Section_4 />
      <Section_five />
      <Footer />
    </>
  );
}

export default App;
