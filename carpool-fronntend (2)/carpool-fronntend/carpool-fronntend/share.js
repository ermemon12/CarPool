document.getElementById("rideOfferForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Collecting form data
    const carModel = document.getElementById("carModel").value;
    const location = document.getElementById("location").value;
    const destination = document.getElementById("destination").value;
    const availableSeats = document.getElementById("availableSeats").value;
    const price = document.getElementById("price").value;
    const departureDate = document.getElementById("departureDate").value;
    const departureTime = document.getElementById("departureTime").value;

    // Creating a new ride object
    const newRide = {
        carModel,
        location,
        destination,
        availableSeats,
        price,
        departureDate,
        departureTime,
    };

    try {
        // Sending the ride data to the backend
        const response = await fetch('http://localhost:5000/api/rides/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRide), // Convert the new ride object to a JSON string
        });

        if (response.ok) {
            const savedRide = await response.json(); // Get the saved ride from the response
            displayRide(savedRide); // Function to display the ride in the UI
            alert('Ride offered successfully!'); // Notify the user
            document.getElementById("rideOfferForm").reset(); // Reset the form
        } else {
            alert('Error offering ride. Please try again.'); // Notify on error
        }
    } catch (error) {
        console.error('Error:', error); // Log the error for debugging
        alert('Error connecting to the server. Please try again later.');
    }
});

// Function to display the offered ride in the UI
function displayRide(ride) {
    const ridesList = document.getElementById("ridesList");
    const rideItem = `
        <div class="ride-item">
            <p><strong>Car Model:</strong> ${ride.carModel}</p>
            <p><strong>From:</strong> ${ride.location}</p>
            <p><strong>To:</strong> ${ride.destination}</p>
            <p><strong>Seats Available:</strong> ${ride.availableSeats}</p>
            <p><strong>Price per Seat:</strong> $${ride.price}</p>
            <p><strong>Departure Date:</strong> ${ride.departureDate}</p>
            <p><strong>Departure Time:</strong> ${ride.departureTime}</p>
        </div>
    `;
    ridesList.innerHTML += rideItem; // Add the new ride to the rides list
}
