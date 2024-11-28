import './SearchField.css'

export default function SearchField({onChange }) {
    return (
        <input 
        className ='searchField' 
        type ='text' 
        placeholder ='Search' 
        onChange ={ onChange } 
        />
    )
}