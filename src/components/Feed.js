import React, { useEffect, useState } from 'react'
import Post from '../components/Post';
import { getusersallpostApi, timelineApi } from '../services/allApi'


function Feed({ userName }) {

  const [posts, setPosts] = useState([])

  const userId = localStorage.getItem("currentid") 

  useEffect(() => {
    const fetchPosts = async () => {
      const res = userName ?  await getusersallpostApi(userName) : await timelineApi(userId)
      setPosts(res?.data?.sort((p1,p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      })
      )
    }
    fetchPosts()
  }, [userName,userId])

  console.log(posts);

  return (
    <div>


      { posts?.map((p) => (
        <Post key={p._id} post={p}></Post>

      ))
      }

    </div>
  )
}

export default Feed