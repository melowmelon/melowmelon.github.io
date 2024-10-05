document.addEventListener("DOMContentLoaded", () => {
    const skillBoxes = document.querySelectorAll(".skill-box");
    const projectTitles = document.querySelectorAll(".project-title");
    const workExperiences = document.querySelectorAll(".work-experience");
    const words = document.querySelectorAll(".fade-in");
    const workBoxes = document.querySelectorAll(".workbox");

    let delay = 0;

    // Animate skill boxes
    skillBoxes.forEach(box => {
        box.style.animationDelay = `${delay}s`;
        box.classList.add("fade-in");
        delay += 0.2; // Increment delay for each skill box
    });

    delay = 0; // Reset delay for project titles
    projectTitles.forEach(title => {
        title.style.animationDelay = `${delay}s`;
        title.classList.add("fade-in");
        delay += 0.2; // Increment delay for each project title
    });

    delay = 0; // Reset delay for work experiences
    workExperiences.forEach(exp => {
        exp.style.animationDelay = `${delay}s`;
        exp.classList.add("fade-in");
        delay += 0.2; // Increment delay for each work experience
    });
    words.forEach(word => {
        word.style.animationDelay = `${delay}s`; // Apply delay to each word
        word.classList.add("fade-in"); // Add fade-in class to start the animation
        delay += 0.07; // Increment delay for the next word
    });
    workBoxes.forEach((box, index) => {
        // Set a staggered animation delay for each box
        box.style.animationDelay = `${index * 0.5}s`; // Each box fades in every 0.5 seconds
        box.style.opacity = '1'; // Set opacity to 1 to trigger the fade-in
        box.classList.add("fade"); // Add a class to start the fade effect
    });

});

