document.addEventListener('DOMContentLoaded', function () {
  
  const birthday = new Date('2024-06-07T00:00:00');

  function updateCountdown() {
      const now = new Date();
      const difference = birthday - now;
      const remainingTime = difference > 0 ? difference : 0;

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      
      const pad = (num) => (num < 10 ? '0' : '') + num;

      document.getElementById('days').innerText = pad(days);
      document.getElementById('hours').innerText = pad(hours);
      document.getElementById('minutes').innerText = pad(minutes);
      document.getElementById('seconds').innerText = pad(seconds);
  }

  setInterval(updateCountdown, 1000);

  updateCountdown();
});
