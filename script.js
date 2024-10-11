document.addEventListener('mousemove', (e) => {
    const cursorBubble = document.getElementById('cursor-bubble');
    cursorBubble.style.left = `${e.clientX}px`;
    cursorBubble.style.top = `${e.clientY}px`;
});

document.addEventListener("DOMContentLoaded", function () {
    // Welcome Title and Description Animation
    const title = "Welcome to My Portfolio";
    const description = "Hi, I'm Merin Ashokkumar, a Computer Science student at Rutgers University specializing in software development and artificial intelligence.";
    const titleElement = document.getElementById("welcome-title");
    const descriptionElement = document.getElementById("welcome-description");
    const downloadButton = document.getElementById("download-btn");
    

    // Function to animate text word by word
    function animateWords(element, text, delay = 100) {
        const words = text.split(" ");
        element.innerHTML = ''; // Clear existing content
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
                        setTimeout(resolve, 800); // Resolve after last word's fade-in
                    }
                }, index * delay);
            });
        });
    }

    // Animate the title and then the description
    animateWords(titleElement, title)
        .then(() => animateWords(descriptionElement, description))
        .then(() => {
            // Show the download button after animations complete
            downloadButton.style.display = 'inline-block';
        });
});
