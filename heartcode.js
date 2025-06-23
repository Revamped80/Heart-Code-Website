 document.addEventListener("DOMContentLoaded", function () { /* This allows for html objects to fade in as user scrolls */ 
            const faders = document.querySelectorAll(".fade-in");

            const appearOptions = {
                threshold: 0.1, // Trigger when 10% of the element is visible
                rootMargin: "0px 0px -50px 0px"
            };

            const appearOnScroll = new IntersectionObserver(function (
                entries,
                observer
            ) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    } else {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            }, appearOptions);

            faders.forEach(fader => {
                appearOnScroll.observe(fader);
            });
        });

        window.addEventListener("DOMContentLoaded", () => {
            const container = document.querySelector(".photoShuffle");
            const photos = Array.from(container.children);
            
            // Hide all photos initially
            photos.forEach(photo => {
                photo.style.display = 'none';
                photo.style.opacity = '0';
                photo.style.transition = 'opacity 1s ease';
            });


            // Show first photo
            let currentIndex = 0;
            if (photos.length > 0) {
                photos[currentIndex].style.display = 'block';
                setTimeout(() => {
                    photos[currentIndex].style.opacity = '1';
                }, 100);
            }


            // Set up automatic cycling
            const cycleTime = 3000; // 3 seconds between photos
            const fadeTime = 800; // 1 second fade duration


            function cyclePhotos() {
                // Fade out current photo
                photos[currentIndex].style.opacity = '0';
                
                setTimeout(() => {
                    // Hide current photo completely after fade out
                    photos[currentIndex].style.display = 'none';
                    
                    // Move to next photo (loop back to 0 if at end)
                    currentIndex = (currentIndex + 1) % photos.length;
                    
                    // Show and fade in next photo
                    photos[currentIndex].style.display = 'block';
                    setTimeout(() => {
                        photos[currentIndex].style.opacity = '1';
                    }, 100);
                    
                    // Schedule next cycle
                    setTimeout(cyclePhotos, cycleTime);
                }, fadeTime);
            }


            // Start the cycling after initial display
            if (photos.length > 1) {
                setTimeout(cyclePhotos, cycleTime);
            }


            // Keep the existing random shuffle functionality
            photos.sort(() => 0.5 - Math.random()); 
            photos.forEach(photo => container.appendChild(photo)); 
        });


        // Keep the existing fade-in observer code
        document.addEventListener("DOMContentLoaded", function () { 
            const faders = document.querySelectorAll(".fade-in");


            const appearOptions = {
                threshold: 0.1, 
                rootMargin: "0px 0px -50px 0px"
            };


            const appearOnScroll = new IntersectionObserver(function (
                entries,
                observer
            ) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    } else {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            }, appearOptions);


            faders.forEach(fader => {
                appearOnScroll.observe(fader);
            });
        });