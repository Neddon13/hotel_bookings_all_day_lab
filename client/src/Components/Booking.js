const Booking = ({booking, deleteBooking}) =>{
    return (
        <>
            <h1>{booking.name}</h1>
            <p>Contact: {booking.contact}</p>
            <p>Check-in Status: {booking.status}</p>
            <button onClick={()=>deleteBooking(booking._id)}> 🗑 </button>
        </>
    )
}


export default Booking;