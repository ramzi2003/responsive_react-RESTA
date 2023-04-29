import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Menus from './pages/Menus';
import About from './pages/About';
import Catering from './pages/Catering';
import Shop from './pages/Shop';
import WorkWithUs from './pages/WorkWithUs';
import reportWebVitals from './reportWebVitals';
import HoursAndLocation from './pages/HoursAndLocation';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

class MyErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const router = createBrowserRouter([
  {
    path: '/responsive_react-RESTA',
    element: <MyErrorBoundary><App/></MyErrorBoundary>
  },
  {
    path: 'hours-and-location',
    element: <MyErrorBoundary><HoursAndLocation/></MyErrorBoundary>
  },
  {
    path: 'menus',
    element: <MyErrorBoundary><Menus/></MyErrorBoundary>
  },
  {
    path: 'about',
    element: <MyErrorBoundary><About/></MyErrorBoundary>
  },
  {
    path: 'catering',
    element: <MyErrorBoundary><Catering/></MyErrorBoundary>
  },
  {
    path: 'shop',
    element: <MyErrorBoundary><Shop/></MyErrorBoundary>
  },
  {
    path: 'catering',
    element: <MyErrorBoundary><Catering/></MyErrorBoundary>
  },
  {
    path: 'work-wth-us',
    element: <MyErrorBoundary><WorkWithUs/></MyErrorBoundary>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
