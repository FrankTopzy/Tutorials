import React from "react";

export const Child = React.memo(function Child({user}: {user: { name: string };}) {
  
  console.log("Child rendered");

  return <p>{user.name}</p>;
});