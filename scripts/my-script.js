window.addEventListener('scroll', function() {
  document.querySelectorAll('section').forEach(section => {
      const img = section.querySelector('img');
      let scrollPosition = window.pageYOffset;
      
      if(scrollPosition + window.innerHeight >= img.offsetTop) {
          img.style.transform = 'scale(1)';
      } else {
          img.style.transform = 'scale(.8)';
      }
  });
});