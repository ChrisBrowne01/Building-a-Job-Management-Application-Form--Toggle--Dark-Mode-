import { Header } from "./component/Header";
import { Footer } from './component/Footer';
import './App.css';

function App() {
  return (
      <div className="App">
        <Header />
        <main className="headerfunc">
          <section className='columns'>Section 1</section>
          <section className='columns'>Section 2</section>
          <section className='columns'>Section 3</section>
        </main>
        <Footer /> 
      </div>
  );
}

export default App;
