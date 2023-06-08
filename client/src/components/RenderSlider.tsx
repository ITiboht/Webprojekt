export function Slider({posts,selectedItem,inc,dec}) {
    return (
        <div className="Slider">
            <span className="Left-Arrow" onClick={dec}>←</span>
            <span className="currID">{posts.indexOf(selectedItem) + 1}</span>
            <span>/</span>
            <span className="maxID">{posts.length}</span>
            <span className="Right-Arrow" onClick={inc}>→</span>
          </div>
    )
}