
//   App.jsx

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import AuthLayout from "./Layout/AuthLayout"
import Indexpage from "./pages/Indexpage"
import Loginpage from "./pages/Loginpage"
import SignUppage from "./pages/SignUppage"
import MainLayout from "./Layout/MainLayout"
import Homepage from "./pages/Homepage"
import ViewWorkspacepage from "./pages/ViewWorkspacepage"
import TrelloBoard from "./pages/TrelloBoardpage"
import AddMemberspage from "./pages/AddMemberspage"
import ProjectAddpage from "./pages/ProjectAddpage"


function App() {
  
  const router=createBrowserRouter(
    createRoutesFromElements(
      <>

          <Route path="/" element={<AuthLayout />}>
                <Route path="/" element={<Indexpage />} /> 
                <Route path="/login" element={<Loginpage />} />
                <Route path="/sign-up" element={<SignUppage />} />
                

          </Route>

          <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Indexpage />} />
                <Route path="/sign-up" element={<SignUppage />} />
                <Route path="/login" element={<Loginpage />} /> 
                <Route path="/home" element={<Homepage />} />
                <Route path="/workspace" element={<ViewWorkspacepage/>} />
                <Route path="/trelloboard" element={<TrelloBoard/>} />
                <Route path="/addmembers" element={<AddMemberspage/>} />
                <Route path="/addproject" element={<ProjectAddpage/>} />
                
          </Route>
      </>
    )
  )

return (
  <>
     
        <RouterProvider router={router} />
     
  </>
)
}

export default App





//--------------------------------------------------------------------------------------------------------------------------------------


//-------------------------------------------------------******   ***** ******--------------------------------------------------
