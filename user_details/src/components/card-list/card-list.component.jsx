import Card from "../card/card.component";
import "./card-list.styles.css"

const CardList = ({usersList}) => {

       

return(
    <div className="card-list">
     {(usersList || [])
     .map((user) => {
        return (<Card key={user.id} user={user}/>); 
      })} 

    </div>
)


}
export default CardList;