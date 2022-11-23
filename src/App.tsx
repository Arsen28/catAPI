import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';

const Cats = lazy(() => import("./features/cats/Cats"));

const Loader = () => {
  return (
    <div className="loader">
      <img src="https://loading.io/spinners/flask/index.flask-loader.svg"/>
      <span>Working on it...</span>
    </div>
  );
}


function App() {
  return (
    <Suspense fallback={<Loader/>}>
    <Router>
      <div className="App">
        <Layout>
          <Routes>
          <Route  path="/" element={<Suspense fallback={<Loader/>}></Suspense>} />
          <Route  path="/:categoryId" element={<Suspense fallback={<Loader/>}><Cats /></Suspense>} />
          </Routes>
        </Layout>
      </div>
    </Router>
    </Suspense>
  );
}

export default App;
