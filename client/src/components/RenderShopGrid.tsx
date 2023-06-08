export function ShopGrid({posts}) {
    return (
      <div className='Store-Grid'>
      { 
        posts.map(post => (
          <div className='Store-Item' key={post.id}>
          <img src={post.imagelink} alt='Shoe Img' />
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
    )
}