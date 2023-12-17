import React from "react";
import useFetch from "./../../Hooks/useFetch";
import { ErrorMesssge } from "./../Error/Error";
import { LoadingMesssge } from "./../Loading/Loading";
import User from "./User";
import "./users.css";

const Users = () => {
  const { allData, isError, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>6. Fetch Users</h1>
      {isError && <ErrorMesssge messageName={isError.message} />}
      {isLoading && <LoadingMesssge messageName="Users" />}
      <div className="users">
        {allData.slice(0, 9).map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
