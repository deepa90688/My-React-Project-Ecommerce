import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function Ordersuccess() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            backgroundColor: "#1a0036",  // Deep violet background
            padding: "20px",
            fontFamily: "'Segoe UI', sans-serif",
            color: "#fff",
        },
        title: {
            fontSize: "2.8rem",
            color: "#ff00ff",  // Neon Violet color
            marginBottom: "20px",
            textShadow: "0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff",
        },
        message: {
            fontSize: "1.3rem",
            color: "#00fff7",  // Neon Cyan color
            marginBottom: "30px",
            textShadow: "0 0 10px #00fff7, 0 0 15px #00fff7",
        },
        button: {
            padding: "14px 28px",
            fontSize: "1.1rem",
            backgroundColor: "#8e2de2",  // Neon purple background
            backgroundImage: "linear-gradient(45deg, #8e2de2, #4a00e0)", // Gradient effect
            color: "#fff",
            border: "2px solid #ff00ff",  // Neon Violet border
            borderRadius: "10px",
            cursor: "pointer",
            transition: "background 0.3s ease, transform 0.3s ease",
            boxShadow: "0 0 20px rgba(255, 0, 255, 0.7)", // Neon glow shadow
            textDecoration: "none",
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🎉 Order Placed Successfully!</h1>
            <p style={styles.message}>Thank you for shopping with us. Your order is on its way!</p>
            <a href="/" style={styles.button}>Go to Home</a>
        </div>
    );
}
