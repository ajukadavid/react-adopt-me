import  { createRoot }  from "react-dom";
import Pet from './Pet'

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" animal="dog" breed="havanese" />
    <Pet name="groot" animal="cow" breed="chinese" />
    <Pet name="boli" animal="mule" breed="polish" />

  </div>
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
