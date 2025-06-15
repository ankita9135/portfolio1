// Mouse follow effect for hero section
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero-section');
    const mouseFollow = document.querySelector('.mouse-follow');

    if (heroSection && mouseFollow) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            mouseFollow.style.transform = `translate(${x}px, ${y}px)`;
        });

        heroSection.addEventListener('mouseleave', () => {
            mouseFollow.style.opacity = '0';
        });

        heroSection.addEventListener('mouseenter', () => {
            mouseFollow.style.opacity = '1';
        });
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Section title animations
    const sectionTitles = document.querySelectorAll('.section-heading');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const title = entry.target;
                const index = Array.from(sectionTitles).indexOf(title);
                
                // Alternate between fadeIn and slideUp animations
                const animationClass = index % 2 === 0 ? 'animate-fadeIn' : 'animate-slideUp';
                title.classList.add(animationClass);
                
                observer.unobserve(title);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '-50px'
    });

    sectionTitles.forEach(title => {
        observer.observe(title);
    });

    // Intersection Observer for fade-in animations
    const observerFadeIn = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observerFadeIn.observe(section);
    });
}); 