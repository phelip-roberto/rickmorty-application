import { useState } from "react"
import logo from "../../assets/logo.svg";
import Card from "../../components/Card/Card";

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
        <div className="col-sm-8 col-10 mx-auto mt-5">
          <input type="text" className="Search Inputs mr-sm-2 mr-1" placeholder="Search characters" value={content} onChange={handleChange} />
          <button className="Btn-search Inputs ml-sm-2 ml-1" onClick={showAlert}>Search</button>
        </div>
        <div className="col-10 mx-auto mt-3">
          <Card />
        </div>
      </div>



    </>
  )
}

export default Home