import { useState } from "react"
import logo from "../../assets/logo.svg";
import SectionCard from "../../components/Section-Card/SectionCard";
import axios from "axios";
// import Loader from "../../components/Loader/Loader";

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
        characters(page: 1, filter: { name: "${name}" }) {
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

    console.log(res.data.data.characters)

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
        {response ?
          <div className="col-8 mx-auto my-3 d-flex justify-content-center">
            <ul className="card-pages list-group list-group-horizontal">
              <li key="prev" className="mx-2 list-group-item "><i className="fas fa-angle-left"></i></li>
              {[1, 2, 3, 4, 5].map(p => <li key={p} className="mx-2 list-group-item ">{p}</li>)}
              <li key="next" className="mx-2 list-group-item "><i className="fas fa-angle-right"></i></li>
            </ul>
          </div>
          : ''}
      </div>

      {/* <Loader /> */}
    </>
  )
}

export default Home