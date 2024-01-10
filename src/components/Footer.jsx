import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div id="footer">
            <Link to="/home">Home</Link>
            <Link to="/red">Red</Link>
            <Link to="/blue">Blue</Link>
    </div>
  )
}
export default Footer;