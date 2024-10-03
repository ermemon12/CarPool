document.addEventListener('DOMContentLoaded', async () => {
    const userId = 'your-logged-in-user-id'; // Replace with the actual user ID or get from token

    try {
        // Fetch user data (e.g., name and email)
        const userResponse = await fetch(`http://localhost:5000/api/users/${userId}`);
        const userData = await userResponse.json();

        // Update the profile info
        document.getElementById('username').textContent = userData.name;
        document.getElementById('email').textContent = userData.email;

        // Fetch rides created by the user
        const createdRidesResponse = await fetch(`http://localhost:5000/api/rides/created/${userId}`);
        const createdRides = await createdRidesResponse.json();

        document.getElementById('ridesCreated').textContent = createdRides.length;

        const createdRidesList = document.getElementById('createdRidesList');
        createdRides.forEach(ride => {
            const li = document.createElement('li');
            li.textContent = `From: ${ride.origin}, To: ${ride.destination}, Date: ${new Date(ride.date).toLocaleDateString()}`;
            createdRidesList.appendChild(li);
        });

        // Fetch rides selected by the user (as a passenger)
        const selectedRidesResponse = await fetch(`http://localhost:5000/api/rides/selected/${userId}`);
        const selectedRides = await selectedRidesResponse.json();

        document.getElementById('ridesSelected').textContent = selectedRides.length;

        const selectedRidesList = document.getElementById('selectedRidesList');
        selectedRides.forEach(ride => {
            const li = document.createElement('li');
            li.textContent = `From: ${ride.origin}, To: ${ride.destination}, Date: ${new Date(ride.date).toLocaleDateString()}`;
            selectedRidesList.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading profile data:', error);
    }
});
