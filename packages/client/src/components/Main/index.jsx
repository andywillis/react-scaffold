import { Routes, Route } from 'react-router-dom';

import styles from './index.module.css';

/**
 * Main
 *
 * @return {object} JSX
 */
function Main() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<SpotmapList />} />
        {/*<Route path="/:type/:value" element={<SpotmapList />} />*/}
      </Routes>
    </main>
  );
}

export default Main;
