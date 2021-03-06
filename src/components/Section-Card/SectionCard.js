import Card from "../Card/Card";


const SectionCard = ({ res }) => {

  const characters = res.results;

  return (
    <>
      <div className="card-wrapper">
        {characters.map(c =>
          <Card key={c.id} img={c.image} status={c.status} name={c.name} species={c.species} origin={c.origin} location={c.location} gender={c.gender} />
        )}
      </div>
    </>
  )
}

export default SectionCard