import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';

import Explore from './Components/Explore/Explore';
import Events from './Components/Events/Events';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Events />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
};

export default App
