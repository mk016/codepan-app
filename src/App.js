
import './App.css';
import Appbar from './Components/AppBar'
import Editer from './Components/Editer'

function App() {
  return (
<>
<Appbar />

<div className='pane top-pane'> 
    <Editer />
    <Editer />
    <Editer />
</div>
  <div className='pane'> 
    <iframe title="output" sandbox='allow-scripts'
    
      frameBorder="0"
      width="100%"
      height="100%"
    />

</div>
</>
  );
}

export default App;
