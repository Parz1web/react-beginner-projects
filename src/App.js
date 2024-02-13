import React, { useEffect } from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";
import { useState } from "react";

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [invites, setInvites] = useState([]);

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div className="App">
      <Users
        items={users}
        isLoading={isLoading}
        searchValue={search}
        onChangeSearch={onChangeSearch}
      />
      {/* <Success /> */}
    </div>
  );
}

export default App;
