import { useContext } from 'react'
import { SiteContext } from './context/siteContext';
import './App.css';
import Header from './components/Header';
import Routes from './routes';

function App() {
  const { site } = useContext(SiteContext);

  if (site) {
    return (
      <>
        <Header />
        <Routes />
      </>
    )
  } else {
    return (
      <h2>LOADING</h2>
    )
  }
}

export default App;
