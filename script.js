// Get modal elements
const aboutMeModal = document.getElementById('about-me');
const personalInfoModal = document.getElementById('personal-info');

// Get open modal buttons
const aboutMeBtn = document.getElementById('about-me-link');
const personalInfoBtn = document.getElementById('personal-info-link');

// Get close buttons
const closeBtns = document.getElementsByClassName('close');

// Function to open modal
function openModal(modal) {
    modal.style.display = 'block';
}

// Function to close modal
function closeModal(modal) {
    modal.style.display = 'none';
}

// Event listeners for opening modals
aboutMeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    openModal(aboutMeModal);
});

personalInfoBtn.addEventListener('click', function(e) {
    e.preventDefault();
    openModal(personalInfoModal);
});

// Event listeners for closing modals
for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click', function() {
        closeModal(this.closest('.modal'));
    });
}

// Close modal when clicking outside of it
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target);
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal(aboutMeModal);
        closeModal(personalInfoModal);
    }
});