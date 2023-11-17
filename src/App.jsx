import './App.css'
import Home from './pages/Home'
import { About } from './pages/About'
import RootLayout from './layout/RootLayout'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import { SkillMenu } from './pages/home/nav/SkillMenu'
import {Tshirt, tshirtLoader} from './pages/home/Tshirt'
import { Admin, adminListLoader } from './pages/admin/Admin'
import { Add_list } from './pages/admin/Add_list'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='list' element={<SkillMenu/>}>
        <Route 
          index 
          element={<Tshirt/>}
          loader={tshirtLoader}
         />
      </Route>
      <Route path='about' element={<About/>}/>
    </Route>
    <Route path='admin' element={<Admin/>} loader={adminListLoader}/>
      <Route path='addlist' element={<Add_list/>}>
    </Route>
    </>
  )
)

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App