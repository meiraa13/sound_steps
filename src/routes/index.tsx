import { Home } from "@/pages/Home"
import { Route, Routes } from "react-router-dom"

export function AppRouter() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
    </Routes>
  )
}
