import { Route, Routes } from "react-router-dom";
import { Category } from "./pages/category";
import { MainLayout } from "./layout/main-layout";
import { Login } from "./pages/login";
import { Brands } from "./pages/brants";
import { Cars } from "./pages/cars";
import { CategoryEdit } from "./components/category-edit";
import { CategoryForm } from "./components/ctegory-form/category-form";
import { BrandsForm } from "./components/brands-form";
import { Models } from "./pages/models";
import { ModelsForm } from "./components/models-form";


function App() {

  

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<MainLayout/>} >
          <Route index element={<Category/>} />
          <Route path="brands" element={<Brands/>} />
          <Route path="cars" element={<Cars/>}/>
          <Route path="models" element={<Models/>}/>
          <Route path="category-edit/:id" element={<CategoryEdit/>} />
          <Route path="category-form" element={<CategoryForm/>} />
          <Route path="brands-form" element={<BrandsForm/>} />
          <Route path="models-form" element={<ModelsForm/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
