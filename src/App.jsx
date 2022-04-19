import './App.css';
import {Routes, Route} from "react-router-dom"
import { Home } from './pages/home';
import { BudgetIndex } from './pages/budget';
function App() {
  return (
    <div className="h-full ">

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/budget" element={<BudgetIndex/>} />
          <Route path="/budget/:category" element={<BudgetIndex/>} />
        </Routes>

    </div>
  );
}
export default App;
