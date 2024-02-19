import Dashboard from "./components/Dashboard"
import DashboardTiles from "./components/DashboardTiles"
import { Login } from "./components/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


const App = () => {
  return (

    <Router>
      <Routes>
        <Route element={<Login/>} path="login" />
        <Route element={<Dashboard/>}  >
          <Route element={<DashboardTiles/>} path=""/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App