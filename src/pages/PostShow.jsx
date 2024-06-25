import axios from "../utils/axiosClient.js";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/Cards/Card.jsx";
import Modal from "../components/Modal/Modal";

const PostShow = () => {

    const { slug } = useParams();

    const navigate = useNavigate();

    const [post, setPost] = useState(null);
    const [deleteMode, setDeleteMode] = useState(false);

    const fetchPost = async () => {
        const res = await axios.get(`/posts/${slug}`);
        const newPost = res.data;
        setPost(newPost);
    }

    const deletePost = async (slug) => {
        const res = await axios.delete(`/posts/${slug}`);
        navigate(-1);
    }

    useEffect(() => {
        fetchPost();
        return () => {
            setPost(null);
        }
    }, [])



    return (
        <section className="container">
            <Card
                isShow={true}
                title={post?.title}
                content={post?.content}
                category={post?.category}
                tags={post?.tags}
                author={post?.user}
                slug={post?.slug}
                image={post?.image}

                onDelete={() => setDeleteMode(true)}
            />
            {deleteMode &&
                <Modal
                    isShow={deleteMode}
                    closeModal={() => setDeleteMode(false)}
                    title={post?.title}
                    author={post?.user?.name}
                    userLogged={user}
                    deleteMode={true}
                    clickDelete={() => { deletePost(post.slug) }}
                />}
        </section>
    )
}

export default PostShow;