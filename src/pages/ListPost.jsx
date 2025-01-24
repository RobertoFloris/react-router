import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListPost = () => {

  const apiUrl = "http://localhost:3000"

  const [posts, setPosts] = useState([])


  const fetchPosts = () => {
    axios.get(`${apiUrl}/posts`)
      .then(res => {
        console.log(res.data)
        setPosts(res.data)
      })
  }

  useEffect(() => {
    fetchPosts()
  }, [])


  return (
    <div className="container">
      <ul>
        {posts.map(post => (
          <li key={post.id} className="d-flex justify-content-between m-3">
            <span>
              <a>{post.title}</a>
            </span>
            <span>
              <Link className="btn btn-success" to={`/dettaglio-post/${post.id}`}>Vedi dettaglio</Link>
            </span>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListPost