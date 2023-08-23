import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Market from "../Pages/Market"
import Trade from "../Pages/Trade"
import NFT from "../Pages/NFT"


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-restaurant" element={<AddRestaurant />} />
      <Route path="/edit-restaurant/:id" element={<EditRestaurant />} />
    </Routes>
  )
}

export default AllRoutes
