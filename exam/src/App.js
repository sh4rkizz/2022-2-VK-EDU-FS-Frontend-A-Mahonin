import { TranslatePage } from './Pages/TranslatePage'
import { HistoryPage } from './Pages/HistoryPage'
import { Navigate, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="translate" replace/> }/>
      <Route path="/translate" element={ <TranslatePage/> }/>
      <Route path="/history" element={ <HistoryPage/> }/>
    </Routes>
  )
}
