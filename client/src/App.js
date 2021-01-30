import './App.css';

function handleClick() {
  fetch('http://localhost:3000/time/now')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    alert(`The local server time is: ${data.time}`);
  })
}

function App() {
  return (
    <button className="button" onClick={()=>{handleClick()}}>
      Get server time in milliseconds
    </button>
  );
}

export default App;
