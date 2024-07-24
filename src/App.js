
import { useState } from 'react';
import './App.css';
import Appbar from './Components/AppBar'
import Editer from './Components/Editer'

function App() {

  const [html, setHtml] = useState('')
  const [css, setcss] = useState('')
  const [Js, setJs] = useState('')
  return (
<>
<Appbar />

<div className='pane top-pane'> 
    <Editer language="xml" displayName="HTML" value={html} onChange={setHtml} />
    <Editer language="css" displayName="css" value={css} onChange={setcss}/>
    <Editer language="javaScript" displayName="js" value={Js} onChange={setJs}/>
</div>
  <div className='pane'> 
    <iframe title="output" sandbox='allow-scripts'
      frameBorder={0}
      width="100%"
      height="100%"
    />

</div>
</>
  );
}

export default App;
