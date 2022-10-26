import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import './app/App.css'


const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Welcome"/>
    </div>
  );
}

export default App;
