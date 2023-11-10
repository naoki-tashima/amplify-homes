import './App.css';
import { NewHomes, NavBarHeader, MarketingFooter } from './ui-components'

function App() {
return (
<div className="App">
    <NavBarHeader width={"100vw"} />
    <NewHomes isPaginated itemsPerPage={3} />
    <MarketingFooter width={"100vw"} />
</div>
);
}

export default App;