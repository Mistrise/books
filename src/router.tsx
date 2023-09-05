import {
    createBrowserRouter,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import BookDetailPage from "./pages/BookDetailPage";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage/>,
        element: <Layout/>,
        children: [
            {index: true, element: <MainPage/>},
            {path: 'book/:id', element: <BookDetailPage/>}
        ]
    },
]);

export default router