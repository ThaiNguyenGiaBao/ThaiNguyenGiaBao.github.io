import LandingPage from "../pages/LandingPage/LandingPage"
import ErrorPage from "../components/ErrorPage/ErrorPage"
import ProjectIntro from "../pages/ProjectPages/ProjectIntro/ProjectIntro"
import MainLayout from "../layout/MainLayout/MainLayout"

/**
 * The router array using in RouterProvider component
 * @type {Array}
 */
const routes = [
    {
        path: '/',
        element: (
            <MainLayout>
                <LandingPage />
            </MainLayout>
        ),
        errorElement: <ErrorPage />
    },
    {
        path: '/project',
        element: (
            <MainLayout>
                < ProjectIntro/>
            </MainLayout>
        ),
    }
]

export default routes