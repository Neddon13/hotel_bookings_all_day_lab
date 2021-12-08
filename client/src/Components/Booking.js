const Booking = ({booking, deleteBooking, updateBooking}) =>{
    const check = { status : "Checked in"};
    const uncheck = { status : "Checked out"}

    if ( booking.status === "Booked") {

        return (
            <>
                <h3>{booking.name}</h3>
                <p>Contact: {booking.contact}</p>
                <p>Status: {booking.status}</p>
                <button onClick={()=>deleteBooking(booking._id)}> 🗑 </button>
                <button onClick={()=>updateBooking(booking._id, check)}> Check in </button>
            </>
        )
    }

    else if (booking.status === "Checked in") {

        return (
            <>
                <h3>{booking.name}</h3>
                <p>Contact: {booking.contact}</p>
                <p>Status: {booking.status}</p>
                <button onClick={()=>deleteBooking(booking._id)}> 🗑 </button>
                <button onClick={()=>updateBooking(booking._id, uncheck)}> Check out </button>
            </>
        )
    }

    return (
        <>
            <h3>{booking.name}</h3>
            <p>Contact: {booking.contact}</p>
            <p>Status: {booking.status}</p>
            <button onClick={()=>deleteBooking(booking._id)}> 🗑 </button>
        </>
    )


    
}


export default Booking;