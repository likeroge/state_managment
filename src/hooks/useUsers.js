import axios from "axios";

const { useState, useEffect } = require("react");

// const usersArr = [
//   { id: 1, name: "Egor", email: "ee@eee.com" },
//   { id: 2, name: "Andrew", email: "aaaa@eee.com" },
//   { id: 3, name: "Rust", email: "rrrrr@eee.com" },
// ];

const usersArr = [];

export const useUsers = () => {
  useEffect(() => {
    const fetch = async () => {
      const users = (
        await axios.get("https://jsonplaceholder.typicode.com/users")
      ).data;
      setUsersArr(users);
    };
    fetch();
  }, []);
  const [usersArray, setUsersArr] = useState(usersArr);
  const users = usersArray;
  const addUser = (user) => setUsersArr((prev) => [...prev, user]);

  return { users, addUser };
};
