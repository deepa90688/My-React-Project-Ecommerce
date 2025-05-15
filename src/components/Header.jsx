import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function Header() {
    const { cart } = useCart();

    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "linear-gradient(90deg, #6a0572, #ab2183)", // violet gradient
        color: "#ffffff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        position: "sticky",
        top: 0,
        zIndex: 1000
    };

    const logoStyle = {
        fontSize: "26px",
        textDecoration: "none",
        color: "#ffffff",
        fontWeight: "bold",
        letterSpacing: "1px",
        textTransform: "uppercase"
    };

    const cartLinkStyle = {
        textDecoration: "none",
        color: "#ffffff",
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        position: "relative"
    };

    const cartCountStyle = {
        backgroundColor: "#ff5722", // vibrant orange
        color: "#ffffff",
        borderRadius: "12px",
        padding: "4px 8px",
        fontSize: "13px",
        fontWeight: "bold",
        boxShadow: "0 1px 5px rgba(0, 0, 0, 0.2)"
    };

    return (
        <header style={headerStyle}>
            <Link to="/" style={logoStyle}>MyShop</Link>
            <Link to="/cart" style={cartLinkStyle}>
                🛒 Cart
                <span style={cartCountStyle}>{cart.length}</span>
            </Link>
        </header>
    );
}
