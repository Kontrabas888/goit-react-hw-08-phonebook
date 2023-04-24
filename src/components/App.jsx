import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Loader } from './loader/loader';
import NotFound from 'pages/NotFound/NotFound';
import Phonebook from 'pages/Phonebook/Phonebook';

const Navigation = lazy(() => import('./Navigation/Navigation'));
const Home = lazy(() => import('pages/Home/Home'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route path="phonebook" element={<Phonebook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
