import "./App.css";
import { Sidebar, Board } from "./components/index";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <div className="App__container flex row">
      <Sidebar />
      <Board />
    </div>
  );
};

export default App;
