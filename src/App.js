import { useEffect, useState, useMemo, useCallback } from "react";
import List from "./components/List";

const initialUsers = [
  { id: 1, name: "Luis" },
  { id: 2, name: "Sofia" },
];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text };
    setUsers([...users, newUser]);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  const handleDelete = useCallback(
    (id) => {
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        //console.log("filter process");
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search, users]
  );

  /*const filteredUsers = users.filter((user) => {
    console.log("filter process");
    return user.name.toLowerCase().includes(search.toLowerCase());
  });*/

  const printUsers = useCallback(() => {
    console.log("changed users", users);
  }, [users]);

  useEffect(() => {
    //console.log("App render");
  });

  useEffect(
    () => {
      printUsers();
    },
    [users],
    printUsers
  );

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleAdd}>Add</button>
      {/*<List users={users} />*/}
      <List users={filteredUsers} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
