import { useState } from "react";

function App() {

  const [joke, setJoke] = useState("jokes here")

  

  return (
    <div className="container">
      <h1>Don't laugh challenge</h1>
      <p className="joke">{joke}</p>
      <button className="btn">Get Another Joke</button>
    </div>
  );
}

export default App;
