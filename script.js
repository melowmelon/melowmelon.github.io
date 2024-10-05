const aboutMeModal = document.getElementById('about-me');
const personalInfoModal = document.getElementById('personal-info');
const aboutMeBtn = document.getElementById('about-me-link');
const personalInfoBtn = document.getElementById('personal-info-link');
const closeBtns = document.getElementsByClassName('close');

function openModal(modal) {
    modal.style.display = 'block';
    setTimeout(() => {
        modal.querySelector('.modal-content').style.opacity = '1';
        modal.querySelector('.modal-content').style.transform = 'translateY(0)';
    }, 10);
}

function closeModal(modal) {
    modal.querySelector('.modal-content').style.opacity = '0';
    modal.querySelector('.modal-content').style.transform = 'translateY(-50px)';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

aboutMeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    openModal(aboutMeModal);
});

personalInfoBtn.addEventListener('click', function(e) {
    e.preventDefault();
    openModal(personalInfoModal);
});

for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click', function() {
        closeModal(this.closest('.modal'));
    });
}

window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target);
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal(aboutMeModal);
        closeModal(personalInfoModal);
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const skills = document.querySelector('.skills');
const skillItems = document.querySelectorAll('.skills li');

function animateSkills() {
    const triggerBottom = window.innerHeight / 5 * 4;
    const skillsTop = skills.getBoundingClientRect().top;

    if(skillsTop < triggerBottom) {
        skillItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
        window.removeEventListener('scroll', animateSkills);
    }
}

window.addEventListener('scroll', animateSkills);
animateSkills();