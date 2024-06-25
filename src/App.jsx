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
import AuthOwner from "./middlewares/AuthOwner"
import Users from "./pages/Users/Users"
import Register from "./pages/Register"
import AuthAdmin from "./middlewares/AuthAdmin"
import Categories from "./pages/Categories"
import Tags from "./pages/Tags"

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

        {/* Rotta Register */}
        <Route path="register" element={<Register />} />

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

      {/* Rotte per gli admin */}
      <Route path="/" element={<AuthAdmin><DefaultLayout /></AuthAdmin>} >

        {/* Rotte per le categorie e per i tags */}
        <Route path="categories" element={<Categories />} />
        <Route path="tags" element={<Tags />} />

      </Route>

      {/* Rotte solo dell'Owner */}
      <Route path="/" element={<AuthOwner><DefaultLayout /></AuthOwner>} >

        <Route path="users" element={<Users />} />

      </Route>

    </Routes>
  )
}

export default App
