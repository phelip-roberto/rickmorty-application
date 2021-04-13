import { useState } from "react";
import Modal from '@material-ui/core/Modal';

const Card = ({ img, status, name, species, origin, location, gender }) => {

  // eslint-disable-next-line
  const [alive, setAlive] = useState(status);

  function isAlive() {
    if (alive === 'Alive') return true
    else return false
  }

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const InfoCard = () => {
    return (
      <>
        <img className={"Card-image " + (isAlive() ? '' : 'dead')} src={img} alt={name}></img>
        <span className="Card-footer">
          <p className="name">{name}</p>
          <p className="species">{species}</p>
        </span>
      </>
    )
  }

  const InfoChar = () => {
    return (
      <>
        <div className="row mt-2 mb-3">
          <p className="info-title">A B O U T</p>
          <h6>Name: {name};  Status: {status};   Specie: {species};   Gender: {gender} </h6>
        </div>
        <div className="row mt-2 mb-3">
          <p className="info-title">O R I G I N</p>

          <span className="mt-2">
            <p className="p-type">{origin.type}</p>
            <p className="p-name">{origin.name}</p>
            <p className="p-dimension">{origin.dimension}</p>
          </span>
        </div>
        <div className="row mt-2 mb-3">
          <p className="info-title">L O C A T I O N</p>
          <span className="mt-2">
            <p className="p-type">{location.type}</p>
            <p className="p-name">{location.name}</p>
            <p className="p-dimension">{location.dimension}</p>
          </span>
        </div>
      </>
    )
  }

  return (
    <>
      <div onClick={handleOpen} className="card mx-auto my-2" >
        <div className="card-body Card-image-wrapper">
          {<InfoCard />}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Modal de Informações"
        aria-describedby="Modal com as informações complementares de cada personagem"
        className="Modal"
      >
        <div className="info-modal d-flex justify-content-center">
          <div className="col-12">
            <span className="mx-3 mt-4 btn d-sm-none" style={{ position: "absolute", color: "white" }} onClick={() => handleClose()}><i className="far fa-times-circle"></i></span>
            <div className="row mx-auto my-auto" style={{ width: '75%', minHeight: '50vh' }}>
              <div className="col-10 col-sm-4 my-5 my-sm-0 ">
                {<InfoCard />}
              </div>
              <div className="col-10 col-sm-8">
                {<InfoChar />}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Card