import Booking from "./Booking.js";

const BookingList = ({bookings, deleteBooking, updateBooking}) =>{
    if (!bookings) return <h2>Loading</h2>

    const listBookings = bookings.map((booking)=>{
        return (
            <>
                <Booking booking={booking} deleteBooking={deleteBooking} key={booking._id} updateBooking={updateBooking}/>
                <hr/>
            </>
        )
    });

    return (
        <div>
            {listBookings}
        </div>

    )
};

export default BookingList;