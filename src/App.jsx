import { RouterProvider } from "react-router-dom"
import { Nav } from "./components/Nav"
import UserContextProvider from "./user.context"
import { routes } from "./routes"
function App() {
  return (
    <div className={`container-md`}>

      <UserContextProvider>
        <RouterProvider router={routes} />
      </UserContextProvider>

    </div>
  )
}

export default App
