import { useParams, useNavigate } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

const DettaglioPost = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const apiUrl = "http://localhost:3000"

  const [post, setPost] = useState(null)

  const [posts, setPosts] = useState([])


  const fetchPost = () => {
    axios.get(`${apiUrl}/posts/${id}`)
      .then(res => {
        console.log(res.data)
        setPost(res.data)
      })
  }

  const fetchPostsPrevious = (id) => {
    axios.get(`${apiUrl}/posts`)
      .then(res => {
        console.log(res.data.findIndex(post => post.id == id))
        navigate(`/dettaglio-post/${res.data.findIndex(post => post.id == id)}`);
      })
  }

  const fetchPostsNext = (id) => {
    axios.get(`${apiUrl}/posts`)
      .then(res => {
        setPosts(res.data)
        console.log(res.data.findIndex(post => post.id == id) + 2)
        // if (res.data.findIndex(post => post.id == id) + 2 > posts.length + 1)
        navigate(`/dettaglio-post/${res.data.findIndex(post => post.id == id) + 2}`);
      })
  }


  useEffect(() => {
    fetchPost()
  }, [id])

  const onDelete = () => {
    axios.delete(`${apiUrl} / posts / ${id}`)
      .then(res => {
        navigate(-1);
      })
  }

  return (
    <div className="col-12">
      <div className="card h-100">
        <img src={post?.image} className="card-img-top" alt={post?.image} />
        <div className="card-body">
          <h5 className="card-title">{post?.title}</h5>
          <p className="card-text">{post?.content}</p>
          <p className="card-text"><strong>{post?.tags?.map(tag => tag = `#${tag}`).join(" ")}</strong></p>
          <button className="btn btn-danger m-3" onClick={onDelete}>Elimina</button>
          <button className="btn btn-success m-3" onClick={() => fetchPostsPrevious(id)}>Precedente</button>
          <button className="btn btn-success m-3" onClick={() => fetchPostsNext(id)}>Successivo</button>
        </div>
      </div>
    </div>
  )
}

export default DettaglioPost