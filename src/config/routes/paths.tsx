import About from '../../page/About/About'
import Contact from '../../page/Contact/Contact'
import Home from '../../page/Home/Home'
import News from '../../page/Home/News/News'


export const PATHS = [
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/news',
        element: <News />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
]