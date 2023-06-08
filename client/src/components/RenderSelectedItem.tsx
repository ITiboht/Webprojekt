export function Shoe({selectedItem}) {  
    return (
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
    )
}