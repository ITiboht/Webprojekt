import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Shoe} from './RenderSelectedItem.tsx';
import {Slider} from './RenderSlider.tsx'

interface Post {
  name: string;
  price: number;
  brand: string;
  gender: string;
  color: string;
  imagelink: string;
  sizes: number[];
}

function HomeData() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [selectedItem, setSelectedItem] = useState<Post | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
  
    useEffect(() => {
      axios
        .get('http://localhost:8080/shoes/all')
        .then((res) => {
          console.log(res.data);
          setPosts(res.data);
          if (res.data.length > 0) {
            setSelectedItem(res.data[0]);
          }
        })
        .catch((err) => console.log(err));
    }, []);
  
    const increaseSelectedItem = () => {
      setSelectedIndex((prevIndex) => (prevIndex === posts.length - 1 ? 0 : prevIndex + 1));
    };
  
    const decreaseSelectedItem = () => {
      setSelectedIndex((prevIndex) => (prevIndex === 0 ? posts.length - 1 : prevIndex - 1));
    };
  
    useEffect(() => {
      if (posts.length > 0) {
        setSelectedItem(posts[selectedIndex]);
      }
    }, [posts, selectedIndex]);

  return (
    <div className="Home-Page">
      {selectedItem ? (
        <div className="Home-Box">
          <Shoe selectedItem={selectedItem}/>
          <button className="Add-Shoe">Add to cart</button>
          <img src={selectedItem.imagelink} />
          <Slider posts={posts} selectedItem={selectedItem} inc={increaseSelectedItem} dec={decreaseSelectedItem} />
        </div>
      ) : (
        <p>Must've been the wind</p>
      )}
    </div>
  );
}

export default HomeData;
