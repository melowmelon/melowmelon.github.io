document.addEventListener('mousemove', (e) => {
    const cursorBubble = document.getElementById('cursor-bubble');
    cursorBubble.style.left = `${e.clientX}px`;
    cursorBubble.style.top = `${e.clientY}px`;
});

document.addEventListener("DOMContentLoaded", function () {
    // Your existing constants
    const title = "Welcome to My Portfolio";
    const description = "Hi, I'm Merin Ashokkumar, a Junior at Rutgers University - New Brunswick studying Computer Science with a minor in Business Administration.";
    const titleElement = document.getElementById("welcome-title");
    const descriptionElement = document.getElementById("welcome-description");
    const downloadButton = document.getElementById("download-btn");

    // Your existing animateWords function
    function animateWords(element, text, delay = 100) {
        const words = text.split(" ");
        element.innerHTML = '';
        return new Promise((resolve) => {
            words.forEach((word, index) => {
                const span = document.createElement('span');
                span.textContent = word + " ";
                span.style.opacity = '0';
                span.style.transition = 'opacity 800ms ease-in-out';
                element.appendChild(span);
                
                setTimeout(() => {
                    requestAnimationFrame(() => {
                        span.style.opacity = '1';
                    });
                    
                    if (index === words.length - 1) {
                        setTimeout(resolve, 800);
                    }
                }, index * delay);
            });
        });
    }

    // Add click event listener for download
    downloadButton.addEventListener("click", function() {
        const link = document.createElement('a');
        link.href = 'resume.pdf';  // Make sure this matches your PDF file's location
        link.download = 'Merin_Ashokkumar_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Animate the title and then the description
    animateWords(titleElement, title)
        .then(() => animateWords(descriptionElement, description))
        .then(() => {
            // Show the download button after animations complete
            downloadButton.style.display = 'inline-block';
        });
       

    // Function to handle smooth scrolling
    function smoothScroll(target) {
        const targetSection = document.querySelector(target);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // Add click event listeners to navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });

    // Handle section transitions on scroll
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrollPosition = window.scrollY;
                const windowHeight = window.innerHeight;
                
                // Determine which section is currently in view
                const sections = document.querySelectorAll('section');
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop - windowHeight/2 && 
                        scrollPosition < sectionTop + sectionHeight - windowHeight/2) {
                        section.style.opacity = '1';
                    } else {
                        section.style.opacity = '0.95';
                    }
                });
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
});
