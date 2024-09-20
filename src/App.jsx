import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='App bg-gray-100 min-h-screen'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
