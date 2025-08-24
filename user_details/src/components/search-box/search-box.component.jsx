import "./search-box.styles.css"

const SearchBox = ({className , placeholder , onSearchHandler}) => {

return(
    
      <div className="Top-Bar-container" >
         <div className="Title inline-block-child">Employee List </div>   
         <input className="Search-box inline-block-child" placeholder={placeholder} type="searchbox" onChange={onSearchHandler}/>
      </div> 
    
)

}
export default SearchBox