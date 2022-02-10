import './App.css';

import Menu from './components/menu/menu';
import {
   BrowserRouter,
} from "react-router-dom";
import RoutingTree from './components/routing';

function App() {
  const title = "Hey"
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <nav>
            <Menu />
          </nav>
          {/* -- Routing Tree -- */}
          <RoutingTree />
        </BrowserRouter>
       <main>
          Hey {title}!!
        </main>
      </div>
    </div>
  );
}

export default App;
git commit
