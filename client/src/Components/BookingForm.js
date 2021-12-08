import {useState} from "react";

import {postBookings} from "../BookingService";

const BookingForm = ({addBooking}) =>{
    const [formData, setFormData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();     
        postBookings(formData).then((data) => {
            addBooking(data);
        
        e.target.reset();
        
        });
    }

    const onChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    return (
        <form className="" onSubmit={handleSubmit} method="post">
            <label htmlFor="name">Name:</label>
            <input  onChange={onChange}type="text" id="name" v-model="name" required/>

            <label htmlFor="contact">Contact:</label>
            <input  onChange={onChange}type="text" id="contact"  required/>

            <label htmlFor="status">Status:</label>
            <input  onChange={onChange}type="text" id="status" required/>

            <input type="submit" value="Save" id="save"/>

        </form>
    )
}
export default BookingForm;