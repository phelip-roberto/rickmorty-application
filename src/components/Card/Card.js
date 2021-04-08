
const Card = ({ img, status, name, species }) => {

  return (
    <>
      {
        <div className="card mx-auto my-2" >
          <div className="card-body Card-image-wrapper">
            <img className="Card-image" src={img} alt={name}></img>
            <span className="Card-footer">
              <p>{name}</p>
              <p>{species}</p>
            </span>
          </div>
        </div>
      }
    </>
  )
}

export default Card