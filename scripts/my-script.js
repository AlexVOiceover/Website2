window.addEventListener('scroll', function() {
  document.querySelectorAll('section').forEach(section => {
      const img = section.querySelector('img');
      const title = section.querySelector('.info h2');
      const description = section.querySelector('.info p');
      let rect = img.getBoundingClientRect();
      
      if(rect.left >= 0 && rect.left <= window.innerWidth) {
          title.style.transform = 'translateY(0)';
          description.style.transform = 'translateY(0)';
      } else {
          title.style.transform = 'translateY(100%)';
          description.style.transform = 'translateY(-100%)';
      }
  });
});