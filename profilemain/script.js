/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 17px rgba(22, 16, 108, 0.58)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Dipanwita Saha","a Web Developer"," a UI/UX Designer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 50,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay:400,
        // reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)



/*CERTIFICATES SECTION*/

const certificates = [
  {
      id: 1,
      title: "SQL Certification Course",
      issuer: "Intellipath",
      date: "March 2025",
      thumbnail: "sqlintellipath.jpg",
      fullImage: "sqlintellipath.jpg",
      credentialUrl: "https://intellipaat.com/academy/certificate-link/?Yz02MTkmdT0yMzEyNjAmZXh0PTE="
  },
  {
      id: 2,
      title: "CSS Basic Certification",
      issuer: "HackerRank",
      date: "April 2025",
      thumbnail: "cssbasic.png",
      fullImage: "cssbasic.png",
      credentialUrl: "https://www.hackerrank.com/certificates/549ef51c2ce1"
  },
  {
      id: 3,
      title: "SQL Basic Certification",
      issuer: "HackerRank",
      date: "March 2025",
      thumbnail: "sql.jpg",
      fullImage: "sql.jpg",
      credentialUrl: "https://example.com/credential/24680"
  },
  {
      id: 4,
      title: "Figma Masterclass",
      issuer: "Physics Wallah",
      date: "June 2025",
      thumbnail: "figma.jpg",
      fullImage: "figma.jpg",
      credentialUrl: "https://pwskills.com/learn/certificate/3a344db1-a6f1-46cf-a4dd-cf3df4d8df19/"
  }
];

// Get DOM elements
const certificatesGrid = document.getElementById('certificatesGrid');
const modal = document.getElementById('certificateModal');
const fullCertificate = document.getElementById('fullCertificate');
const closeModal = document.getElementById('closeModal');

// Generate certificate cards
function generateCertificateCards() {
  certificatesGrid.innerHTML = '';
  
  certificates.forEach(cert => {
      const card = document.createElement('div');
      card.className = 'certificate-card';
      
      card.innerHTML = `
          <img class="certificate-img" src="${cert.thumbnail}" alt="${cert.title}">
          <div class="certificate-info">
              <h3 class="certificate-title">${cert.title}</h3>
              <p class="certificate-issuer">Issued by: ${cert.issuer}</p>
              <p class="certificate-date">Date: ${cert.date}</p>
              <div class="buttons-container">
                  <button class="view-btn" data-id="${cert.id}">View Certificate</button>
                  <button class="credential-btn" data-url="${cert.credentialUrl}">View Credential</button>
              </div>
          </div>
      `;
      
      certificatesGrid.appendChild(card);
  });
  
  // Add event listeners to buttons
  const viewButtons = document.querySelectorAll('.view-btn');
  viewButtons.forEach(button => {
      button.addEventListener('click', openCertificate);
  });
  
  // Add event listeners to credential buttons
  const credentialButtons = document.querySelectorAll('.credential-btn');
  credentialButtons.forEach(button => {
      button.addEventListener('click', openCredential);
  });
}

// Open certificate in modal
function openCertificate() {
  const certId = parseInt(this.getAttribute('data-id'));
  const certificate = certificates.find(cert => cert.id === certId);
  
  if (certificate) {
      fullCertificate.src = certificate.fullImage;
      fullCertificate.alt = certificate.title;
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  }
}

// Open credential in new tab
function openCredential() {
  const credentialUrl = this.getAttribute('data-url');
  if (credentialUrl) {
      window.open(credentialUrl, '_blank');
  }
}

// Close modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Enable scrolling again
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
  if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', generateCertificateCards);


/*image box  */

const image = document.getElementById('animated-image');
const container = document.querySelector('.image-container'); // Or 'body' if you prefer

container.addEventListener('mousemove', (e) => {
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Normalize mouse coordinates to a range of -1 to 1
    const rotateX = (mouseY / centerY) * 10; // Adjust the 10 for intensity
    const rotateY = (mouseX / centerX) * 10; // Adjust the 10 for intensity

    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) perspective(500px)`;
});

container.addEventListener('mouseleave', () => {
    // Reset the rotation when the mouse leaves
    image.style.transform = 'rotateX(0deg) rotateY(0deg) perspective(500px)';
});



/*for transition */
// Wait for the DOM to be fully loaded
// In your main portfolio JavaScript (paste.txt)
// Replace the current document.addEventListener('DOMContentLoaded',...) section with this:

document.addEventListener('DOMContentLoaded', function() {
  // Check if we're coming from the intro animation
  const fromIntro = sessionStorage.getItem('fromIntroAnimation');
  
  // Set initial state of the page
  document.body.style.transition = 'opacity 1.5s ease-in-out';
  document.body.style.opacity = '1'; // Set default to visible

  if (fromIntro === 'true') {
    // If coming from intro, start with opacity 0
    document.body.style.opacity = '0';
    
    // Fade in the content after a slight delay to ensure the page is rendered
    setTimeout(() => {
      document.body.style.opacity = '1';
      // Clear the flag since we've used it
      sessionStorage.removeItem('fromIntroAnimation');
    }, 50);
   }
});

