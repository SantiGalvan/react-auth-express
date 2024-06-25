import { Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import Posts from "./pages/Posts"
import PostShow from "./pages/PostShow"
import PostEdit from "./pages/PostEdit"
import PostCreate from "./pages/PostCreate"
import AuthPage from "./middlewares/AuthPage"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Routes>

      {/* Rotte pubbliche */}
      <Route path="/" element={<DefaultLayout />}>

        {/* NotFound */}
        <Route path="*" element={<NotFound />} />

        {/* Home */}
        <Route index element={<Home />} />

        <Route path="posts" >

          {/* Index */}
          <Route index element={<Posts />} />

          <Route path=":slug">

            {/* Show */}
            <Route index element={<PostShow />} />

          </Route>

        </Route>

        {/* Rotta Login */}
        <Route path="login" element={<Login />} />

      </Route >

      {/* Rotte private */}
      <Route path="/" element={<AuthPage><DefaultLayout /></AuthPage>}>
        <Route path="posts" >

          <Route path=":slug">

            {/* Edit */}
            <Route path="edit" element={<PostEdit />} />

          </Route>

          {/* Create */}
          <Route path="create" element={<PostCreate />} />

        </Route>

        <Route path="dashboard" element={<Dashboard />} />

      </Route>

    </Routes>
  )
}

export default App
