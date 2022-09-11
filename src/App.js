import {Component} from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello World!</h2>
}

// const Field = () => {
//   const holder = 'Enter here';
//   const styledFied = {
//     width: '300px'
//   };
//   return <input 
//           placeholder={holder}
//           type="text"
//           style={styledFied}/>
// }

class Field extends Component {
    render() {
      const holder = 'Enter here';
      const styledFied = {
        width: '300px'
    };

    return <input 
            placeholder={holder}
            type="text"
            style={styledFied}/>
  }
}

function Btn() {
  const text = 'Log in';
const logget = false;

  return <button>{logget ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export {Header};
export default App;
