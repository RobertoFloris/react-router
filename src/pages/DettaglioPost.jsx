import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

const DettaglioPost = () => {

  const { id } = useParams();

  const apiUrl = "http://localhost:3000"

  const [post, setPost] = useState(null)


  const fetchPosts = () => {
    axios.get(`${apiUrl}/posts/${id}`)
      .then(res => {
        console.log(res.data)
        setPost(res.data)
      })
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="col-12">
      <div className="card h-100">
        <img src={post?.image} className="card-img-top" alt={post?.image} />
        <div className="card-body">
          <h5 className="card-title">{post?.title}</h5>
          <p className="card-text">{post?.content}</p>
          <p className="card-text"><strong>{post?.tags.map(tag => tag = `#${tag}`).join(" ")}</strong></p>
          <button className="btn btn-danger">Elimina</button>
        </div>
      </div>
    </div>
  )
}

export default DettaglioPost