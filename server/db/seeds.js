use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Mr Keith Douglas",
        contact: "kdog@code.co.uk",
        status: "Booked"
    },
    {
        name: "Mr Stuart Houston",
        contact: "StuSton@clan.co.uk",
        status: "Booked"
    },
    {
        name: "Miss Nicole Sneddon",
        contact: "neddon@ros.co.uk",
        status: "Checked in"
    },

    {
        name: "Mr Roger Malgueira",
        contact: "doger@ros.com",
        status: "Checked out"
    }
]);