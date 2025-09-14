import CreateBookingForm from "./CreateBookingForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function CreateBooking() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="boooking-form">
          <Button>Create new booking</Button>
        </Modal.Open>
        <Modal.Window name="boooking-form">
          <CreateBookingForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default CreateBooking;
