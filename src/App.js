import {Routes, Route} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadWordsFB} from "./redux/modules/words";
import AddWord from "./AddWord";
import DicList from "./diclist";
import UpdateWord from "./UpdateWord";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadWordsFB());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>My Dictionary</h1>
      <Routes>
        <Route path="/" element={<DicList />} />
        <Route path="/addword" element={<AddWord />} />
        <Route path="/updateword" element={<UpdateWord />} />
      </Routes>
    </div>
  );
}

export default App;