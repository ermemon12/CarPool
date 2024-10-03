document.getElementById("rideSearchForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    // Collecting user preferences
    const userLocation = document.getElementById("location").value.toLowerCase();
    const userDestination = document.getElementById("destination").value.toLowerCase();
    const userDate = document.getElementById("date").value;
    const userTime = document.getElementById("time").value;

    // Load rides from the API
    try {
        const response = await fetch('http://localhost:5000/api/rides/available'); // Update with your backend URL
        const rides = await response.json();

        // Clear previous results
        document.getElementById("ridesList").innerHTML = "";

        // Filter rides based on user preferences
        const filteredRides = rides.filter(ride => {
            const rideLocation = ride.origin.toLowerCase(); // Update this if necessary
            const rideDestination = ride.destination.toLowerCase(); // Update this if necessary

            const isLocationMatch = rideLocation.includes(userLocation);
            const isDestinationMatch = rideDestination.includes(userDestination);
            const isDateMatch = userDate ? new Date(ride.date).toISOString().split('T')[0] === userDate : true;

            // If a time is provided, check if it's within a 60-minute window
            let isTimeMatch = true;
            if (userTime) {
                const userTimeInMinutes = timeToMinutes(userTime);
                const rideTimeInMinutes = timeToMinutes(ride.departureTime);
                const timeDifference = Math.abs(userTimeInMinutes - rideTimeInMinutes);
                isTimeMatch = timeDifference <= 60; // 60 minutes window
            }

            return isLocationMatch && isDestinationMatch && isDateMatch && isTimeMatch;
        });

        // Show filtered results
        if (filteredRides.length > 0) {
            filteredRides.forEach(ride => {
                let rideItem = `
                    <div class="ride-item">
                        <p><strong>Car Model:</strong> ${ride.carModel}</p>
                        <p><strong>From:</strong> ${ride.origin}</p>
                        <p><strong>To:</strong> ${ride.destination}</p>
                        <p><strong>Seats Available:</strong> ${ride.seatsAvailable}</p>
                        <p><strong>Price:</strong> $${ride.price}</p>
                        <p><strong>Departure Date:</strong> ${new Date(ride.date).toISOString().split('T')[0]}</p>
                        <p><strong>Departure Time:</strong> ${ride.departureTime}</p>
                        <button class="bookRide" data-ride='${JSON.stringify(ride)}'>Book Ride</button>
                    </div>
                `;
                document.getElementById("ridesList").innerHTML += rideItem;
            });

            // Add event listeners to "Book Ride" buttons
            document.querySelectorAll('.bookRide').forEach(button => {
                button.addEventListener('click', function () {
                    const ride = JSON.parse(this.getAttribute('data-ride'));
                    displayBookingOptions(ride);
                });
            });

        } else {
            document.getElementById("ridesList").innerHTML = "<p>No matching rides found.</p>";
        }
    } catch (error) {
        console.error('Error fetching rides:', error);
        document.getElementById("ridesList").innerHTML = "<p>Error fetching rides. Please try again later.</p>";
    }
});

// Function to display booking options
function displayBookingOptions(ride) {
    const bookingMessage = document.getElementById("bookingMessage");
    bookingMessage.style.display = "block";

    // Handle booking confirmation
    document.getElementById("confirmBooking").onclick = function () {
        alert(`You have booked the ride from ${ride.origin} to ${ride.destination}.`);
        // Redirect to payment gateway or further processing here
        window.location.href = "payment.html"; // Change to your actual payment page URL
    };

    // Handle cancellation
    document.getElementById("cancelBooking").onclick = function () {
        bookingMessage.style.display = "none"; // Hide booking options
        alert('Ride booking canceled.'); // Notify the user
    };
}

// Helper function to convert time to minutes
function timeToMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
}
