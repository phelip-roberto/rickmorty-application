import { useState } from "react"
import logo from "../../assets/logo.svg";
import SectionCard from "../../components/Section-Card/SectionCard";
import axios from "axios";

const apiUrl = "https://rickandmortyapi.com/graphql";

const Home = () => {

  const [name, setName] = useState('');
  const [response, setResponse] = useState('')

  function handleChange(event) {
    setName(event.target.value);
  }

  async function consumeApi() {
    let query = `
      query {
        characters(filter: { name: "${name}" }) {
          results {
            id
            name
            status
            species
            image
          }
        }
      }
    `;

    let res = await axios({
      method: "POST",
      url: apiUrl,
      data: {
        query: query
      }
    });

    if (res.status === 200) setResponse(res.data.data.characters)
    else setResponse([])
  }

  return (
    <>
      <div className="row">
        <div className="col-8 mx-auto mt-5">
          <img src={logo} className="Logo" alt="logo"></img>
        </div>
        <div className="col-sm-8 col-10 mx-auto mt-5">
          <input type="text" className="Search Inputs mr-sm-2 mr-1" placeholder="Search characters" value={name} onChange={handleChange} />
          <button className="Btn-search Inputs ml-sm-2 ml-1" onClick={() => consumeApi()}>Search</button>
        </div>
        <div className="col-10 mx-auto mt-3 mt-sm-5">
          <section>
            {response ? <SectionCard res={response} /> : ''}
          </section>
        </div>
      </div>



    </>
  )
}

export default Home