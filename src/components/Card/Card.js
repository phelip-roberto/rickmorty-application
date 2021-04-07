import img from "../../assets/image.svg"

const Card = () => {

  return (
    <>
      <div className="card">
        <div className="card-body Card-image-wrapper">
          <img className="Card-image" src={img} alt="teste"></img>
          <span className="Card-footer">
            <p>Rick Sanchez</p>
            <p>Human</p>
          </span>
        </div>
      </div>
    </>
  )
}

export default Card