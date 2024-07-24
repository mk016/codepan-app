import { useState } from 'react';
import './App.css';
import Appbar from './Components/AppBar';
import Editer from './Components/Editer';

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  const srcDoc = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `;

  return (
    <>
      <Appbar />

      <div className="pane top-pane">
        <Editer language="xml" displayName="HTML" value={html} onChange={setHtml} />
        <Editer language="css" displayName="CSS" value={css} onChange={setCss} />
        <Editer language="javascript" displayName="JS" value={js} onChange={setJs} />
      </div>
      
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder={0}
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
