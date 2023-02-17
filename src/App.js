import Button from "./Button"
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [cnt, setCnt] = useState(0)
  const [keyword, setKeyword] = useState("")
  useEffect(() => {console.log("Call Once")}, [])
  useEffect(() => console.log("Click"), [cnt])
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5)
    {
    console.log("Search ", keyword)
    }
  }, [keyword])
  return (
    <div>
      <h1 className={styles.title}>Title Text Click Count : {cnt}</h1>
      <input value={keyword} onChange={(e) => {
        setKeyword(e.target.value)
      }} type="text" placeholder="Search here" />
      <Button text={"1st Button"} onClick={() => {setCnt((cur) => cur + 1)}} />
    </div>
  );
}

export default App;
