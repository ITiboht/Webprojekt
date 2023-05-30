import React, {useState, useEffect} from 'react'
import axios from 'axios'
import logo from '../../images/logo.png'

function DataFetching() {
    
    const [posts, setPosts] = useState<string[]>([])

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
        <div className='col filter'>
        <div className='Store-Filter'>
        <div>
          <span>Brand</span>
          <ul className='Brand'>
            <li>
            <input type='checkbox' />
              <label>Nike</label>
            </li>
          </ul>
        </div>
        <div>
          <span>Size</span>
          <ul className='Size'>
            <li>
              <input type='checkbox' id='size-1' name='size-1' />
              <label htmlFor='size-1'>Size 1</label>
            </li>
          </ul>
        </div>
        <div>
          <span>Gender</span>
          <ul className='Gender'>
            <li>
              <input type='checkbox' id='gender-1' name='gender-1' />
              <label htmlFor='gender-1'>Gender 1</label>
            </li>
          </ul>
        </div>
        <div>
          <span>Color</span>
          <ul className='Color'>
            <li>
              <input type='checkbox' id='color-1' name='color-1' />
              <label htmlFor='color-1'>Color 1</label>
            </li>
          </ul>
        </div>  
      </div>
        </div>
        <div className='col'>
        <div className='Store-Grid'>
      { 
        posts.map(post => (
          <div className='Store-Item' key={post.id}>
          <img src={post.imagelink} alt='logo' />
          <div className='Store-Item-Info'>
            <h3>{post.name}</h3>
            <h4>{post.price}</h4>
            <button>Buy Now</button>
          </div>
          </div>
        )
        )
      }
      </div> 
      </div>
    </div>
    </div>
    </div>
      
    )
    
}

export default DataFetching