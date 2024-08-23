import About from '../../page/About/About'
import Contact from '../../page/Contact/Contact'
import Home from '../../page/Home/Home'


export const PATHS = [
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/sport',
        element: <About />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
]