import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { ShopGrid } from './RenderShopGrid.tsx'

function DataFetching() {
    
    const [posts, setPosts] = useState<string[]>([])

    const getPosts = (): string[] => {
    return posts;
    }

    useEffect(() => {
        axios.get('http://localhost:8080/shoes/all')
      .then(res => {
        console.log(res.data)
        setPosts(res.data)
    })
      .catch(err => console.log(err))
    }, [])

    

    
    /*
    <div>
            {posts.map(post => (<li key={post.id}>{post.name}</li>))}
        </div>
    */

        /*
        {
          posts.map(post => (
          <div className='Store-Item' key={post.id}>
          <img src={logo} alt='logo' />
          <div className='Store-Item-Info'>
            <h3>{post.name}</h3>
            <h4>{post.price}</h4>
            <button>Buy Now</button>
          </div>
          </div>
          )
          )
        }
        */
    
    return (
      <div className='Store-Page'>
      <div className='row'>
        <div className='col'>
        <h1 className='Header'>Explore the possibilities</h1>
        <a>Great deals for great shoes!</a>
        </div>
      <div className='row'>
        <div className='col'>
         <ShopGrid posts={posts} />
      </div>
    </div>
    </div>
    </div>
      
    )
    
}

export default DataFetching