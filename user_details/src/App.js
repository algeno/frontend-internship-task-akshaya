import { useEffect, useState } from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredUserList, setFilteredUserList] = useState(users);

  useEffect(() => {
    fetch("./api/users.json")
      .then((response) => response.json())
      .then((res) => setUsers(res));
  }, []);

  useEffect(() => {
    const newFilteredUsers = users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredUserList(newFilteredUsers);
  }, [users, searchField]);

  const onSearchUser = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <SearchBox
        placeholder="Search Employee"
        className="User-Search-Box"
        onSearchHandler={onSearchUser}
      />

      <CardList usersList={filteredUserList} />
    </div>
  );
}

export default App;
