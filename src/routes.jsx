import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { SighUp } from "./pages/SighUp";
import { SignIn } from "./pages/SignIn";
import { TransactionsPage } from "./pages/TransactionsPage";
import { Protected } from "./components/Protected";
import Layout from "./components/Layout";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/signup",
                element: <SighUp />
            },
            {
                path: "/signin",
                element: <SignIn />
            },
            {
                path: "/transactions",
                element: <Protected />,
                children: [
                    {
                        path: "/transactions",
                        element: <TransactionsPage />
                    }
                ]
            }
        ]
    }

]);