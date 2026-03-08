// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initial Load Timeline
    const tl = gsap.timeline();
    
    tl.to('.hero-title .reveal-text', {
        y: '0%',
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.1,
        delay: 0.2
    })
    .to('.reveal-fade', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2
    }, "-=0.6");

    // 2. Global Parallax Background
    // The hero background moves slower than the scroll speed
    gsap.to('.hero-bg', {
        yPercent: 30, // Moves down slightly as user scrolls down
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // 3. Section Heading Reveals
    gsap.utils.toArray('.section-heading .reveal-text').forEach(heading => {
        gsap.to(heading, {
            y: '0%',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: heading.closest('.section-heading'),
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // 4. Fade Up Elements (About text, stats, project info)
    gsap.utils.toArray('.fade-up-item, .fade-up-text').forEach(item => {
        gsap.from(item, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // 5. Project Images Inner Parallax (The requested parallax scroll effect)
    gsap.utils.toArray('.project-image-wrapper').forEach(wrapper => {
        const image = wrapper.querySelector('.item-parallax');
        
        gsap.to(image, {
            yPercent: 20, // Move the inner image down as we scroll
            ease: 'none',
            scrollTrigger: {
                trigger: wrapper,
                start: 'top bottom', // Start when wrapper enters from bottom
                end: 'bottom top', // End when wrapper leaves from top
                scrub: true
            }
        });
    });
    
});
