window.addEventListener('scroll', function() {
    document.querySelectorAll('section').forEach(section => {
        const img = section.querySelector('img');
        const info = section.querySelector('.info');
        let scrollPosition = window.scrollY;
        
        if(scrollPosition + window.innerHeight >= img.offsetTop && scrollPosition <= img.offsetTop + img.offsetHeight) {
            info.style.opacity = '1';
        } else {
            info.style.opacity = '0';
        }
    });
});