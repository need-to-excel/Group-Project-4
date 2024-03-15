import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';

import Explore from './Components/Explore/Explore';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Explore />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
};

export default App
