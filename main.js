
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
          element.classList.add('active');
      }else{
        element.classList.remove('active');
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
          element.classList.add('active');
      }else{
        element.classList.remove('active');
      }
  });
});


//skill parallex

window.addEventListener('scroll', () => {
  const skills = document.querySelector('.skills');
  const projects = document.querySelector('.projects');
  
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
  const threshold = viewportHeight * 0.001;

  // Check if the project heading should be sticky or relative
  if ((window.scrollY + threshold > projectsOffsetTop) && (window.scrollY+ threshold < projectsOffsetBottom)) {
    projectHeading.style.transform = `translateY(${(window.scrollY + threshold - projectsOffsetTop) * 1}px)`;
    
  }else{
    projectHeading.style.transform = 'translateY(0px)';
  }
});




