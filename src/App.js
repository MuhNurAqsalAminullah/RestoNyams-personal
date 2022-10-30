import logo from './logo.svg';
import './assets/style/Global.css';
import "swiper/css/bundle";
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
