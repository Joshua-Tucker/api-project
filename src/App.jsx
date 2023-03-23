import './App.scss';
import Nav from "./Containers/Nav/Nav";
import CardContainer from './Containers/CardContainer/CardContainer';
import mockData from "./mockData/mockData"

function App() {
  return (
    <div className="App">
      <Nav/>
      <CardContainer mockData={mockData}/>
  
    </div>
  );
}

export default App;
