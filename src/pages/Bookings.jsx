import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import CreateBooking from "../features/bookings/CreateBooking";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>

      <Row>
        <BookingTable />
        <CreateBooking />
      </Row>
    </>
  );
}

export default Bookings;
