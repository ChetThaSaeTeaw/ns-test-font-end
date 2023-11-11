import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'; // CSS

import { Suspense , lazy } from 'react';
import { Routes , Route } from 'react-router-dom';

// components
import Loading from './components/Loading/Loading';

// pages
const HomePage = lazy(() => import('./pages/Home/Home'));
const PermutationsPage = lazy(() => import('./pages/Permutations/Permutations'));
const FindTheOddPage = lazy(() => import('./pages/FindTheOdd/FindTheOdd'));
const CountSmileysPage = lazy(() => import('./pages/CountSmileys/CountSmileys'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
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
