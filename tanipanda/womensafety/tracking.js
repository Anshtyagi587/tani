document.addEventListener("DOMContentLoaded", () => {
    let map = L.map("map").setView([28.7041, 77.1025], 13); // Default location (Delhi)

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Default marker and circle
    let marker = L.marker([28.7041, 77.1025]).addTo(map);
    let circle = L.circle([28.7041, 77.1025], { radius: 100 }).addTo(map);
    
    // Get elements
    let locationInfo = document.getElementById("locationInfo");
    let startTrackingBtn = document.getElementById("startTracking");

    // Function to update location
    function updateLocation(lat, lon) {
        let newLatLng = new L.LatLng(lat, lon);
        marker.setLatLng(newLatLng);
        circle.setLatLng(newLatLng);
        map.setView(newLatLng, 15);

        // Display location inside the box
        locationInfo.innerHTML = `<strong>Latitude:</strong> ${lat.toFixed(5)}<br><strong>Longitude:</strong> ${lon.toFixed(5)}`;
    }

    startTrackingBtn.addEventListener("click", () => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(
                (position) => {
                    let lat = position.coords.latitude;
                    let lon = position.coords.longitude;
                    updateLocation(lat, lon);
                },
                (error) => {
                    locationInfo.innerHTML = "⚠️ Location access denied. Enable GPS.";
                },
                { enableHighAccuracy: true }
            );
        } else {
            locationInfo.innerHTML = "❌ Geolocation not supported in this browser.";
        }
    });
});
