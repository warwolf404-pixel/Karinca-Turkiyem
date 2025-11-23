import { useState } from 'react';
import Home from './pages/Home';  // Home.tsx'i import et

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Sayfalar arasında geçiş yap
  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      // case 'species': 
      //   return <SpeciesLibrary />;
      // case 'care':
      //   return <CareGuide />;
      // case 'colonies':
      //   return <Colonies />;
      default:
        return <Home />;
    }
  };

  return renderPage();
}

export default App;
