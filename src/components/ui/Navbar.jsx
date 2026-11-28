import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex gap-5 p-4 bg-blue-500 text-white">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Service</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/products">Products</Link>
            <Link to="/productDetails/1">Product Details</Link>
            
        </nav>
    )
}

export default Navbar