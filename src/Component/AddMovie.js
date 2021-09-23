import { useState, useRef } from "react";
import { Modal, Button } from "react-bootstrap";

const AddMovie = ({ add }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const nameRef = useRef();
  const dateRef = useRef();
  const durationRef = useRef();
  const rateRef = useRef();

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Information about your movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>Name :</label>
            <input type="text" ref={nameRef}></input>
            <label>Date :</label>
            <input type="text" ref={dateRef}></input>
            <label>Duration :</label>
            <input type="text" ref={durationRef}></input>
            <label>Rate :</label>
            <input type="text" ref={rateRef}></input>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              add({
                name: nameRef.current.value,
                duration: durationRef.current.value,
                rate: rateRef.current.value,
                date: dateRef.current.value,
                img: "https://fr.web.img6.acsta.net/pictures/21/08/02/16/08/1706767.jpg",
              })
            }
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;
