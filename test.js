
const weddingDate = new Date(
  "2027-06-12T16:00:00-05:00"
).getTime();

function updateCountdown() {
  const now = Date.now();
  const difference = weddingDate - now;

  if (difference <= 0) {
    document.getElementById("countdown")
      .textContent = "It's our wedding day!";
    return;
  }

  const days = Math.floor(difference / 86400000);
  const hours = Math.floor(
    (difference / 3600000) % 24
  );
  const minutes = Math.floor(
    (difference / 60000) % 60
  );
  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  document.getElementById("countdown")
    .textContent =
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
