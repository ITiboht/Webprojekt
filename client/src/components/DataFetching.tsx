import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { ShopGrid } from './RenderShopGrid.tsx'
import { SearchBar } from './GridSearchBar.tsx'

function DataFetching() {
    
    const [posts, setPosts] = useState<string[]>([])
    const [searchInput, setSearchInput] = useState('');
    const [filteredPosts, setFilteredPosts] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(event.target.value);
    };

    useEffect(() => {
      const filtered = posts.filter((post) =>
        post.name.includes(searchInput)
      );
      console.log('Search: ' + searchInput);
      setFilteredPosts(filtered);
    }, [searchInput, posts]);

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
          <SearchBar handleInputChange={handleInputChange} searchQuery={searchInput}/>
        </div>
      <div className='row'>
        <div className='col'>
         <ShopGrid posts={filteredPosts}/>
      </div>
    </div>
    </div>
    </div>  
    ) 
}

export default DataFetching