// JavaScript to animate job duration
const workBoxes = document.querySelectorAll('.work-experience');

workBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        const start = box.getAttribute('data-start'); // Get start date
        const end = box.getAttribute('data-end'); // Get end date

        let startDate = new Date(start + '-01'); // Create a Date object for start month
        let endDate = new Date(end + '-01'); // Create a Date object for end month

        const animatedDuration = box.querySelector('.animated-duration');

        // Clear the previous interval if any
        clearInterval(box.animationInterval);
        
        // Function to update month
        box.animationInterval = setInterval(() => {
            // Update the animated duration text
            animatedDuration.textContent = startDate.toLocaleString('default', { month: 'long' }) + ' ' + startDate.getFullYear();
            startDate.setMonth(startDate.getMonth() + 1); // Move to next month

            // Stop the animation when end date is reached
            if (startDate > endDate) {
                clearInterval(box.animationInterval);
                animatedDuration.textContent = endDate.toLocaleString('default', { month: 'long' }) + ' ' + endDate.getFullYear(); // Set to end month
            }
        }, 500); // Change month every 500 milliseconds
    });

    // Stop the animation when mouse leaves the box
    box.addEventListener('mouseleave', () => {
        clearInterval(box.animationInterval);
    });
});
