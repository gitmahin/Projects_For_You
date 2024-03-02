import React from 'react'
import { useState, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'

const Blog = () => {
    const [posts, setPosts] = useState([])
    const [progress, setProgress] = useState(0)

    const fetchData = async () => {
        setProgress(30)
        const postData = await fetch('http://localhost:3000/getpostfromdatabase')
        setProgress(60)
        const data = await postData.json()
        setPosts(data)
        setProgress(100)
    }

    useEffect(() => {
        fetchData()
    }, [])



    return (
        <>
            <LoadingBar
                color='#6a05ec'
                progress={progress}
                shadow={0}
                height={4}
                onLoaderFinished={() => setProgress(0)}
            />
            <h1>Blog</h1>
            <div className="containerwrap">
                <div className="container">
                    {posts.map((post) => {
                        return <div key={post._id} className="card">
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            <p>{post.postDate}</p>
                        </div>
                    })}
                </div>

            </div>
        </>
    )
}

export default Blog
