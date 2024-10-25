import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/router';

export default function App(): React.ReactElement {
  return <RouterProvider router={router} />;
}
