window.addEventListener('scroll', function() {
    const banner = document.getElementById('contact-banner');
    if (window.scrollY > 100) {
        banner.classList.remove('hidden');
    } else {
        banner.classList.add('hidden');
    }
});