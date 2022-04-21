import { memo, useEffect } from "react";
import Item from "./Item";

const List = memo(({ users, handleDelete }) => {
  useEffect(() => {
    //console.log("List Render");
  });

  return (
    <ul>
      {users.map((user) => (
        <Item user={user} key={user.id} handleDelete={handleDelete} />
      ))}
    </ul>
  );
});

export default List;
