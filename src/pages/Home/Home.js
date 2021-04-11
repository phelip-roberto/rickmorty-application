import { useState } from "react"
import axios from "axios";
import logo from "../../assets/logo.svg";
import SectionCard from "../../components/Section-Card/SectionCard";
import Pagination from "../../components/Pagination/Pagination";

const apiUrl = "https://rickandmortyapi.com/graphql";

const Home = () => {

  const [name, setName] = useState('');
  const [response, setResponse] = useState('');
  const [info, setInfo] = useState('');


  function handleChange(event) {
    setName(event.target.value);
  }

  async function consumeApi(appPage = 1) {

    let query = `
      query {
        characters(page: ${appPage}, filter: { name: "${name}" }) {
          info {
            count
            pages
            next
            prev
          }
          results {
            id
            name
            status
            species
            image
            origin {
              name
              type
              dimension
            }
            location {
              name
              type
              dimension
            }
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

    if (res.status === 200) {
      setInfo(res.data.data.characters.info)
      setResponse(res.data.data.characters)
    }
    else {
      setInfo([])
      setResponse([])
    }
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
        {response ?
          <Pagination info={info} consumeApi={consumeApi} />
          : ''}
      </div>

    </>
  )
}

export default Home