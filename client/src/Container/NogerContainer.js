import { useEffect, useState } from 'react';

import {getBookings, deleteBooking as apiDeleteBooking, updateBooking as apiUpdateBooking} from "../BookingService";
import BookingForm from "../Components/BookingForm";
import BookingList from "../Components/BookingList";

function NogerContainer() {

  const [bookings, setBookings] = useState([]);

  useEffect(()=>{
    getBookings()
    .then((data)=>{
      console.log(data);
      setBookings(data)
    })
  },[]);

  const addBooking = (booking) => {
    let temp = bookings.map(book => book);
    temp.push(booking);
    setBookings(temp);
  }

  const deleteBooking = (id) => {
    apiDeleteBooking(id)
    .then(()=>{
      let temp = bookings.map(book=>book);
      const toDel = bookings.map(book =>book._id).indexOf(id);
      temp.splice(toDel, 1);
      setBookings(temp);
    })
    
  }

  const updateBooking = (id, status) => {
    apiUpdateBooking(id, status)
    .then(getBookings()
    .then((data)=>{
      console.log(data);
      setBookings(data)
    }))
  };

  
  if (!bookings) return <h1>Loading</h1>
  return (
    <div className="container">
        <BookingForm addBooking={addBooking}/>
        <BookingList bookings={bookings} deleteBooking={deleteBooking} updateBooking={updateBooking} />
    </div>
  );
}

export default NogerContainer;