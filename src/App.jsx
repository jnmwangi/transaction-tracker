import { RouterProvider } from "react-router-dom"
import { Nav } from "./components/Nav"
import UserContextProvider from "./user.context"
import { routes } from "./routes"
function App() {
  return (
    <div className={`container h-100 d-flex flex-column gap-3`}>

      <UserContextProvider>
        <RouterProvider router={routes} />
      </UserContextProvider>

    </div>
  )
}

export default App
