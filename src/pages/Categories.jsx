import axios from "../utils/axiosClient.js";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import GenericCard from "../components/Cards/GenericCard.jsx";


const Categories = () => {

    const [categories, setCategories] = useState();

    const fetchCategories = async () => {
        const res = await axios.get('categories');
        setCategories(res.data);
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <section className="container">
            <div className="row g-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="mb-2">Categorie</h1>
                    <Link
                        to={''}
                        className="btn btn-success h-75 d-flex align-items-center justify-content-center gap-1">
                        <FaPlus />Crea Categoria
                    </Link>
                </div>
                {categories?.map(({ id, label, color }) => (
                    <div key={`category-${id}`} className="col-3">
                        <GenericCard
                            label={label}
                            color={color}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Categories;