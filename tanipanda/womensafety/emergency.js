function sendEmergencyAlert() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const emergencyMessage = `🚨 EMERGENCY ALERT! 🚨\nLocation: https://www.google.com/maps?q=${lat},${lon}`;

                alert("Emergency Alert Sent!");
                sendSMS(emergencyMessage);
            },
            (error) => {
                alert("Failed to get location. Ensure GPS is enabled.");
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function sendSMS(message) {
    // Simulated SMS API (Replace with Twilio or real API)
    console.log("Sending SMS:", message);
}
// Function to handle emergency alert
function sendEmergencyAlert() {
    alert("Emergency alert sent! Your location has been shared.");
    // Add any additional logic for sending alerts here
}