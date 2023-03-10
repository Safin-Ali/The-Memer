import { createBrowserRouter } from 'react-router-dom';
import Login from '../Components/Form/Login';
import Home from '../Pages/Home/Home';
import Main from '../Pages/Main/Main';


export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
        ]
    },
    {
        path: '/login', element: <Login></Login>
    },
])