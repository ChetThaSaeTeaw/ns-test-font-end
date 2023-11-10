import './App.scss'; // CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import { Suspense , lazy } from 'react';
import { Routes , Route } from 'react-router-dom';

// pages
const HomePage = lazy(() => import('./pages/Home/Home'));
const PermutationsPage = lazy(() => import('./pages/Permutations/Permutations'));
const FindTheOddPage = lazy(() => import('./pages/FindTheOdd/FindTheOdd'));
const CountSmileysPage = lazy(() => import('./pages/CountSmileys/CountSmileys'));

function App() {
  return (
    <Suspense fallback="Loading...">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/permutations' element={<PermutationsPage />} />
          <Route path='/findtheodd' element={<FindTheOddPage />} />
          <Route path='/countsmileys' element={<CountSmileysPage />} />
        </Routes>
    </Suspense>
  );
};

export default App;
