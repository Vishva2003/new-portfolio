const inactive = document.querySelector('.inactive');
const active = document.querySelector('.active');
const topnav = document.querySelector('.topnav');

function linktree() {
    inactive.style.display='none';
    active.style.display = 'block';
}

function hidetree() {
  inactive.style.display='block';
  active.style.display = 'none';
}

//reveal bottom nav
let bottomNavTimeout;
window.addEventListener('scroll', function() {
  const bottomNav = document.querySelector('.bottom-nav');
  const pageHeight = window.innerHeight/2;

  if (window.scrollY >= pageHeight) {
      bottomNav.classList.add('show');

      bottomNavTimeout = setTimeout(() => {
        bottomNav.classList.remove('show');
    }, 7000);
  } else {
      bottomNav.classList.remove('show');
  }
});

//reveal-text

window.addEventListener('scroll', () => {
  const fadeInElements = document.querySelectorAll('.reveal-text');
  const triggerHeight = window.innerHeight * 0.75;

  fadeInElements.forEach(element => {
      const elementRect = element.getBoundingClientRect();
      if (elementRect.top < triggerHeight) {
          element.classList.add('active');
      }else{
        element.classList.remove('active');
      }
  });
});

//project-container-left


window.addEventListener('scroll', () => {
  const fadeInElements = document.querySelectorAll('.project-container-left');
  const triggerHeight = window.innerHeight * 0.55;

  fadeInElements.forEach(element => {
      const elementRect = element.getBoundingClientRect();
      if (elementRect.top < triggerHeight) {
          element.classList.add('active-left');
      }else{
        element.classList.remove('active-left');
      }
  });
});

//project-container-right

window.addEventListener('scroll', () => {
  const fadeInElements = document.querySelectorAll('.project-container-right');
  const triggerHeight = window.innerHeight * 0.55;

  fadeInElements.forEach(element => {
      const elementRect = element.getBoundingClientRect();
      if (elementRect.top < triggerHeight) {
          element.classList.add('active-right');
      }else{
        element.classList.remove('active-right');
      }
  });
});


//skill parallex

window.addEventListener('scroll', () => {
  const skills = document.querySelector('.skills');
  const projects = document.querySelector('.parallex-box');
  
  // Get the offsetY of skills
  const skillsRect = skills.getBoundingClientRect();
  const skillsOffsetY = skillsRect.top + window.scrollY;
  

  // Get the offsetY of projects
  const projectsRect = projects.getBoundingClientRect();
  const projectsOffsetY = projectsRect.top + window.scrollY;

  // Calculate the threshold for 3/4 of the bottom of the viewport
  const viewportHeight = window.innerHeight;
  const threshold = viewportHeight * 0.75;

  console.log('Skills OffsetY:', skillsOffsetY);
  console.log('Projects OffsetY:', projectsOffsetY);

  // Additional logic for parallax effect can be added here
  // Example: Parallax effect for projects
  if (window.scrollY + threshold > projectsOffsetY) {
      projects.style.transform = `translateY(${(window.scrollY + threshold - projectsOffsetY) * -0.5}px)`;
  } else {
      projects.style.transform = 'translateY(0px)';
  }
});

//sticky project heading


window.addEventListener('scroll', () => {
  const projectsSection = document.querySelector('.projects');
  const projectHeading = document.querySelector('.projectHeading');
  
  // Calculate the offset top for the projects section and the project heading
  const projectsRect = projectsSection.getBoundingClientRect();
  const projectsOffsetTop = projectsRect.top + window.scrollY;
  const projectsOffsetBottom = projectsOffsetTop + projectsSection.offsetHeight;
  
  // Calculate the scroll position
  const viewport =window.scrollY + window.innerHeight;

  console.log('projectsOffsetTop:', projectsOffsetTop);
  console.log('viewport:', viewport);
  console.log('projectsOffsetBottom:',projectsOffsetBottom);

  const viewportHeight = window.innerHeight;
  const threshold = viewportHeight * 0;

  // Check if the project heading should be sticky or relative
  if ((window.scrollY + threshold > projectsOffsetTop) && (window.scrollY+ threshold < projectsOffsetBottom)) {
    projectHeading.style.transform = `translateY(${(window.scrollY + threshold - projectsOffsetTop) * 1}px)`;
    
  }else{
    projectHeading.style.transform = 'translateY(0px)';
  }
});



//keyup
document.querySelectorAll('.js-input').forEach(function(input) {
  input.addEventListener('keyup', function() {
      if (input.value) {
          input.classList.add('not-empty');
      } else {
          input.classList.remove('not-empty');
          
      }
  });
});


//timezone

function getIndianTime() {
  var d = new Date();

  // IST is UTC + 5.5 hours
  var offset = 5.5;

  // Obtain local time in milliseconds
  var localTime = d.getTime();

  // Obtain local offset in milliseconds
  var localOffset = d.getTimezoneOffset() * 60000;

  // Obtain UTC time in milliseconds
  var utc = localTime + localOffset;

  // Create new Date object for IST using the offset
  var nd = new Date(utc + (3600000 * offset));

  var timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
  var indianTimeStr = nd.toLocaleTimeString('en-US', timeOptions);
  // Return time as a string
  document.getElementById("utcTime").innerHTML = indianTimeStr;
}

// Call the function to display the time
getIndianTime();

// Optional: Set an interval to update the time every second
setInterval(getIndianTime, 1000);







