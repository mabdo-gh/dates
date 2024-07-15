import { Container } from 'react-bootstrap';
import { dates } from './components/Data';
import Header from './components/Header';
import Content from './components/Content';
import Buttons from './components/Bottons';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [times, setTimes] = useState(dates);

  const clearTimes = () => {
    setTimes([]);
  }

  const showTimes = () => {
    setTimes(dates);
  }

  useEffect(() => {
    setTimes([]);
  }, []);

  return (
    <Container className='py-5'>
      <Header dates={times} />
      <Content dates={times} />
      <Buttons clearTimes={clearTimes} showTimes={showTimes} />
    </Container>
  );
}

export default App;

/**
 * Development by : Mahmoud Abd Elaziz
 * Mobile : 01201576447
 */
