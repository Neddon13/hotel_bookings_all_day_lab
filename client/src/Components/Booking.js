const Booking = ({booking, deleteBooking, updateBooking}) =>{
    const check = { status : "checked in"}

    return (
        <>
            <h1>{booking.name}</h1>
            <p>Contact: {booking.contact}</p>
            <p>Status: {booking.status}</p>
            <button onClick={()=>deleteBooking(booking._id)}> 🗑 </button>
            <button onClick={()=>updateBooking(booking._id, check)}> Check in </button>
        </>
    )
}


export default Booking;