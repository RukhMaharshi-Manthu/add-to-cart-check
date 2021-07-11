
import "./styles.css";
import { useState } from "react";
import RecipeList from "./RecipeList";
import SearchField from "./SearchField";
import { recipeArr } from "./RecipeData";
import { NavBar } from "./navBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./Cart";
export default function App() {
  let initialRcpArr = recipeArr;
  // let initialRcpArr = recipeArr.map((ele) => {
  //   let obj = {};
  //   obj["name"] = ele.name;
  //   obj["url"] = ele.url;
  //   obj["details"] = "";
  //   return obj;
  // });
  const [cart, setCart] = useState([]);
  const [rcpArr, setRcpArr] = useState(recipeArr);
  return (
<>
<Router>
        <NavBar />

        <Switch>

          <Route exact path="/">
          <div className="App">
      <header className="app-header">
        <p id="page-title">Babies Looks</p>
        <h6>
          Want to buy a your awesome outfit, it's a place to find new fashion trendy collection...keep loving more
        </h6>
        <SearchField
          rcpArr={rcpArr}
          setRcpArr={setRcpArr}
          initialRcpArr={initialRcpArr}
        />
      </header>

      <RecipeList
        recipeArr={recipeArr}
        rcpArr={rcpArr}
        setRcpArr={setRcpArr}
        initialRcpArr={initialRcpArr}
        cartMethod={setCart} 
        cart={cart}
      />
     
      <footer>
        <p>Disclamer</p>
        <p>Our app not responsible for taste of the food prepared.</p>
      </footer>
    </div>
           
          </Route>
          <Route exact path="/about">
          </Route>
          <Route exact path="/shop">
          <div className="App">
      <header className="app-header">
        <p id="page-title">Babies Looks</p>
        <h6>
          Want to buy a your awesome outfit, it's a place to find new fashion trendy collection...keep loving more
        </h6>
        <SearchField
          rcpArr={rcpArr}
          setRcpArr={setRcpArr}
          initialRcpArr={initialRcpArr}
        />
      </header>

      <RecipeList
        recipeArr={recipeArr}
        rcpArr={rcpArr}
        setRcpArr={setRcpArr}
        initialRcpArr={initialRcpArr}
        cartMethod={setCart} 
        cart={cart}
      />
      <footer>
        <p>Disclamer</p>
        <p>Our app  responsible for quality product @Copyrights</p>
      </footer>
    </div>
          </Route>
          <Route path="/addItem">
          <Cart cart={cart} cartMethod={setCart} />
          </Route>
         
        </Switch>
      </Router>
    

    
    </>
  );
}
