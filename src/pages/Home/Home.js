import { useState } from "react"
import logo from '../../assets/logo.svg';

const Home = () => {

  const [content, setContent] = useState('')

  const handleChange = e => {
    setContent(e.target.value);
  }

  const showAlert = () => {
    alert(content);
  }

  return (
    <>
      <div className="row">
        <div className="col-8 mx-auto mt-5">
          <img src={logo} className="Logo" alt="logo"></img>
        </div>
        <div className="col-8 mx-auto mt-4">
          <input type="text" className="Search" value={content} onChange={handleChange} />
          <button className="Btn-search" onClick={showAlert}>Search</button>
        </div>
      </div>



    </>
  )
}

export default Home