import axios from "../utils/axiosClient.js";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import GenericCard from "../components/Cards/GenericCard.jsx";


const Tags = () => {

    const [tags, setTags] = useState();

    const fetchTags = async () => {
        const res = await axios.get('tags');
        setTags(res.data);
    }

    useEffect(() => {
        fetchTags();
    }, [])

    return (
        <section className="container">
            <div className="row g-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="mb-2">Tags</h1>
                    <Link
                        to={''}
                        className="btn btn-success h-75 d-flex align-items-center justify-content-center gap-1">
                        <FaPlus />Crea Tag
                    </Link>
                </div>
                {tags?.map(({ id, label, color }) => (
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

export default Tags;