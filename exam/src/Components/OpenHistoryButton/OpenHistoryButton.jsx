import './OpenHistoryButton.scss'
import { Link } from 'react-router-dom'

export const OpenHistoryButton = () => {
  return <Link className="material-icons" to="/history">history</Link>
}