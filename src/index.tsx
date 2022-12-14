
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

const container: HTMLElement | null = document.getElementById('root');
const root = createRoot(container!);
root.render( <Provider store={store}>
  <App />
</Provider>);

