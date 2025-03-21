import GoogleButton from 'react-google-button';
import './App.css'

function App() {

  function navigate (url){
    window.location.href = url
  }

  async function auth(){
    const res = await fetch('http://localhost:3000/request', { method: 'post'})

    const data = await res.json()
    console.log("data: ", data)
    navigate(data.url)

  }
  return (
    <div> 
      <h1>Welcome to MemoStream</h1>
      <h3>
        Google OAuth2
      </h3>


      <button>
      <GoogleButton
        onClick={() => auth()}
      />

      </button>
    </div>
  )
}

export default App;
