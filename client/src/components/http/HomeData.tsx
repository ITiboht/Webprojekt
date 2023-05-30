import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../../images/logo.png';

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
  
    const handleItemClick = (post: Post, index: number) => {
      setSelectedItem(post);
      setSelectedIndex(index);
    };
  
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
          <ul className="Shoe-Data">
            <li className="Shoe-Name">{selectedItem.name}</li>
            {selectedItem.brand && <li>{selectedItem.brand}</li>}
            <li>{selectedItem.gender}</li>
            <li>{selectedItem.color}</li>
            {selectedItem.sizes && (
              <li>
                SIZES: {selectedItem.sizes.map((sizes) => (
                  <span key={sizes}>{sizes} </span>
                ))}
              </li>
            )}
          </ul>
          <button className="Add-Shoe">Add to cart</button>
          <img className="Shoe-Image" src={selectedItem.imagelink} alt="No image found sry :(" />
          <div className="Slider">
            <span className="Left-Arrow" onClick={decreaseSelectedItem}>←</span>
            <span className="currID">{posts.indexOf(selectedItem) + 1}</span>
            <span>/</span>
            <span className="maxID">{posts.length}</span>
            <span className="Right-Arrow" onClick={increaseSelectedItem}>→</span>
          </div>
        </div>
      ) : (
        <p>Must've been the wind</p>
      )}
    </div>
  );
}

export default HomeData;
