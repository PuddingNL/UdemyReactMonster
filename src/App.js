import { useState, useEffect } from "react";

import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState(""); // state, setState
  const [monsters, setMonsters] = useState([]);
  const [title, setTitle] = useState("Monsters Rolodex");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log("Rendered");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value;
    setTitle(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        className={"search-box"}
        onChangeHandler={onSearchChange}
        placeholder={"Search Monsters"}
      />
      <br />
      <SearchBox
        className={"search-box"}
        onChangeHandler={onTitleChange}
        placeholder={"Set Title"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
