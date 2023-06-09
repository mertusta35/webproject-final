import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes ,Route} from "react-router-dom";
import Home from './routes/Home';
import Menu from './routes/Menu';
import Kids from './routes/Kids';
import Roman from './routes/Roman';
import Kirtasiye from './routes/Kirtasiye';

import SignIn from './routes/sign-in/sign-in.component';


function App() {
  return (  
    <div className="App">
    <Routes>
      <Route path='/' element={<Menu/>}>
      <Route  index element={<Home/>}></Route>
      <Route path='/Kids' element={<Kids/>} ></Route>
      <Route path='/Roman' element={<Roman/>} ></Route>
      <Route path='/Kirtasiye' element={<Kirtasiye/>} ></Route>
      <Route path='/sign-in' element={<SignIn/>}/></Route>
    </Routes>
    </div>
  );
}

export default App;
