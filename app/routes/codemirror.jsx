import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';

function App() {
  const [value, setValue] = React.useState("");
  console.log(value);
  const onChange = React.useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);
  return <CodeMirror value={value} height="200px" extensions={[css({ jsx: true })]} onChange={onChange} />;
}
export default App;