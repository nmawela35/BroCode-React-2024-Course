import { useContext } from "react";
import ComponentD from "./ComponentD";
import { UserContext } from "./ComponentA";

export default function ComponentC() {
    const user =useContext(UserContext)

  return (
    <div className="box">
    <h1>ComponentC</h1>
    <h3>{`User from A: ${user}`}</h3>
    <ComponentD/>
</div>
  )
}
