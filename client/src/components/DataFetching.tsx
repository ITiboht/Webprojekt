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