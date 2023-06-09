export function SearchBar({searchQuery, handleInputChange}){

    return (
    <form className="Search-Bar">
        <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        />
    </form>
    )
}