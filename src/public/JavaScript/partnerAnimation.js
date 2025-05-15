// Dừng animation khi hover vào .partner-marquee
window.addEventListener('DOMContentLoaded', function() {
  // Clone các items để tạo hiệu ứng liên tục
  const tracks = document.querySelectorAll('.partner-track');
  tracks.forEach(track => {
    const items = Array.from(track.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });
  });

  // Xử lý hover pause
  document.querySelectorAll('.partner-marquee').forEach(function(marquee) {
    const track = marquee.querySelector('.partner-track');
    
    marquee.addEventListener('mouseenter', function() {
      track.style.animationPlayState = 'paused';
    });
    
    marquee.addEventListener('mouseleave', function() {
      track.style.animationPlayState = 'running';
    });
  });
});
