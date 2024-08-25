import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PATHS } from './paths'
import Home from '../../page/Home/Home'
import BaseLayout from '../../ui/components/BaseLayout/BaseLayout'

export const AppRoutes = () => (
    <BrowserRouter>
        <BaseLayout>
        <Routes>
            <Route
                element={<Home />}
                path='/'
            />

            {PATHS.map(({ element, path }) => (
                <Route
                    key={path}
                    element={element}
                    path={path}
                />
            ))}
        </Routes>
        </BaseLayout>
    </BrowserRouter>
)