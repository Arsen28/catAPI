import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';

const Cats = lazy(() => import("./features/cats/Cats"));

const Loader = () => {
  return (
      <span>Working on it...</span>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
          <Route  path="/" element={<Suspense fallback={<Loader/>}><Cats /></Suspense>} />
          <Route  path="/:categoryId" element={<Suspense fallback={<Loader/>}><Cats /></Suspense>} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
