import React, {useEffect} from 'react';

export function SearchBar({searchQuery, handleInputChange}){

    return (
    <form>
        <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        />
    </form>
    )
}