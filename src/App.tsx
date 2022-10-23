import "./App.css";
import { Sidebar, ControlledBoard } from "./components/index";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <div className="App__container flex row">
      <Sidebar />
      <ControlledBoard />
    </div>
  );
};

export default App;
