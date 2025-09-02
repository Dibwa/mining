   document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mainNav = document.getElementById('main-nav');
            
            mobileMenuBtn.addEventListener('click', function() {
                mainNav.classList.toggle('active');
                
                if (mainNav.classList.contains('active')) {
                    mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
                } else {
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
            
            // Animation on scroll
            const animateElements = document.querySelectorAll('.animate');
            
            function checkScroll() {
                animateElements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (elementPosition < screenPosition) {
                        element.style.opacity = 1;
                        element.style.transform = 'translateY(0)';
                    }
                });
            }
            
            // Initial check
            checkScroll();
            
            // Check on scroll
            window.addEventListener('scroll', checkScroll);
            
            // Filter functionality
            const filters = document.querySelectorAll('.filter');
            
            filters.forEach(filter => {
                filter.addEventListener('click', function() {
                    filters.forEach(f => f.classList.remove('active'));
                    this.classList.add('active');
                    
                    // In a real app, this would filter the listings
                    // For this demo, we'll just simulate a loading effect
                    const listingCards = document.querySelectorAll('.listing-card');
                    listingCards.forEach(card => card.style.opacity = '0.5');
                    
                    setTimeout(() => {
                        listingCards.forEach(card => card.style.opacity = '1');
                    }, 300);
                });
            });
            
            // Simple auth modal simulation
            const authButtons = document.querySelectorAll('.auth-buttons a');
            
            // authButtons.forEach(button => {
            //     button.addEventListener('click', function(e) {
            //         e.preventDefault();

            //     });
            // });
        });