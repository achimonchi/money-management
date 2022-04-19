import {Routes, Route} from "react-router-dom"
import { Home } from './pages/home';
import { BudgetIndex } from './pages/budget';
import { BudgetCategory } from './pages/budget/category';
import { TambahCategory } from "./pages/budget/tambahCategory";
function App() {
  return (
    <div className="h-full ">

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/budget" element={<BudgetIndex/>} />
          <Route path="/budget/:category" element={<BudgetCategory/>} />
          <Route path="/budget/:category/tambah/kategori" element={<TambahCategory/>} />
        </Routes>

    </div>
  );
}
export default App;
