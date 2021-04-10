import { useState } from "react"
import Card from "../Card/Card";


const SectionCard = ({ res }) => {

  // eslint-disable-next-line
  const [characters, setCharacters] = useState(res.results);

  return (
    <>
      <div className="card-wrapper">
        {characters.map(c =>
          <Card key={c.id} img={c.image} status={c.status} name={c.name} species={c.species} origin={c.origin} location={c.location} />
        )}
      </div>
    </>
  )
}

export default SectionCard