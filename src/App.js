import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import './app/App.css'
import ItemCount from "./components/ItemCount";


const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Welcome"/>
      <ItemCount/>
    </div>
  );
}

export default App;
