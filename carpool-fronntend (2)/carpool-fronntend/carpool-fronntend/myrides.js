document.addEventListener('DOMContentLoaded', function () {
    // Example data for created and selected rides
    const createdRides = [
        { id: 1, origin: "City A", destination: "City B", date: "2024-10-10", seatsAvailable: 2 },
        { id: 2, origin: "City C", destination: "City D", date: "2024-10-15", seatsAvailable: 3 },
    ];

    const selectedRides = [
        { id: 1, origin: "City E", destination: "City F", date: "2024-10-20", seatsReserved: 1 },
        { id: 2, origin: "City G", destination: "City H", date: "2024-10-25", seatsReserved: 2 },
    ];

    // Function to display rides
    function displayRides() {
        const createdRidesList = document.getElementById('createdRidesList');
        const selectedRidesList = document.getElementById('selectedRidesList');

        // Populate created rides
        createdRides.forEach(ride => {
            const li = document.createElement('li');
            li.textContent = `From: ${ride.origin}, To: ${ride.destination}, Date: ${ride.date}, Seats Available: ${ride.seatsAvailable}`;
            createdRidesList.appendChild(li);
        });

        // Populate selected rides
        selectedRides.forEach(ride => {
            const li = document.createElement('li');
            li.textContent = `From: ${ride.origin}, To: ${ride.destination}, Date: ${ride.date}, Seats Reserved: ${ride.seatsReserved}`;
            selectedRidesList.appendChild(li);
        });
    }

    displayRides(); // Call the function to display rides
});
