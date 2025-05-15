import { useState } from "react";
import { products } from "../date/product.js";
import ProductCard from "../components/ProductCard";
import { FaStoreAlt } from "react-icons/fa";

const Home = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filteredProducts = products.filter(
        (p) =>
            (category === "All" || p.category === category) &&
            p.name.toLowerCase().includes(search.toLowerCase())
    );

    const categories = ["All", ...new Set(products.map((p) => p.category))];

    const styles = {
        container: {
            padding: "20px",
            fontFamily: "'Segoe UI', sans-serif",
            backgroundColor: "#f9f9ff",
            minHeight: "100vh",
            color: "#222",
        },
        heading: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            color: "rebeccapurple",
            gap: "8px",
            marginBottom: "20px",
        },
        filters: {
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "20px",
            flexWrap: "wrap",
        },
        input: {
            padding: "8px",
            fontSize: "0.9rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            minWidth: "180px",
        },
        select: {
            padding: "8px",
            fontSize: "0.9rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            minWidth: "150px",
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "15px",
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>
                <FaStoreAlt size={24} color="rebeccapurple" />
                Explore Products
            </h1>
            <div style={styles.filters}>
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={styles.input}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={styles.select}
                >
                    {categories.map((cat) => (
                        <option key={cat}>{cat}</option>
                    ))}
                </select>
            </div>
            <div style={styles.grid}>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id + product.name} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;
