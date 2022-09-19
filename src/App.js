import './App.css';
import Header from './component/Header'
import MainVisual from './component/MainVisual';
import MainContent from './component/MainContent';
import Portfolio from './component/Portfolio';
import Solution from './component/Solution';
import Promotion from './component/Promotion';
import News from './component/News';
import Footer from './component/Footer';
import Totop from './component/Totop';
import Popup from './component/Popup';

const App = () => {
  return (
    <div className="Wrap">
      <Header />
      <main>
        <MainVisual />
        <MainContent />
        <Portfolio />
        <Solution />
        <Promotion />
        <News />
        <Footer />
        <Totop />
        <Popup />
      </main>
    </div>
  );
}

export default App;