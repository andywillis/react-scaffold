import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';

import {} from './store/atoms';

/**
 * App
 *
 * @return {object} JSX
 */
function App() {

  useEffect(() => {
    async function getData() {
      // const response = await fetch('/library');
      // const data = await response.json();
    }
    getData();
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
