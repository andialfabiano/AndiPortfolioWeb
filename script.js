
const projects = [
  {
    id: 1,
    year: 'Short Film - 2026',
    title: 'Dear Candidate,',
    image: 'https://lh3.googleusercontent.com/d/1DViz-1e7a5BE1vwyAJKibM106OWZug96',
    videoLink: 'https://drive.google.com/file/d/1IfIcpJzezLFuGFzY5686Ikz96S3pLffD/view?usp=drive_link',
    written: 'Andi Davalah',
    genre: 'Socio-Critic, Comedy',
    duration: '11 Minutes',
    synopsis: 'Stuck in the middle of nowhere with barely any signal, Uki must survive an online job interview with an annoying HR recruiter.'
  },
  {
    id: 2,
    year: 'Feature Film - 2026',
    title: "Abed's Journey",
    image: 'https://lh3.googleusercontent.com/d/1sVS6F4ld53sQ7ORQkFM1RW5i8IWc8_5t',
    videoLink: 'https://drive.google.com/file/d/16faEqDVqURsxS8pRskSrRUA6xh4G5rf1/view',
    written: 'Andi Davalah',
    genre: 'Musical, Drama, Comedy',
    duration: '1 Hr 15 Minutes',
    synopsis: "A late 20's loser gets a chance to travel back in time to fix his middle school days by performing at the school's talent show."
  },
  {
    id: 3,
    year: 'Short Film - 2026',
    title: "Sadar Waras",
    image: 'https://lh3.googleusercontent.com/d/1lq832cmfh6NQnCrbOhilvX9Bq206gdtB',
    videoLink: 'https://drive.google.com/file/d/1uaKWOjeNxcB-xk7qNQpsOBazdfxXWvkj/view',
    written: 'Andi Davalah',
    genre: 'Dark Comedy, Drama',
    duration: '15 Minutes',
    synopsis: 'Driven by suicidal thoughts, Andri roams through the city of Bandung in search of the perfect spot to end his life.'
  },
  {
    id: 4,
    year: 'Reels Content - 2026',
    title: 'The Terrified Story of an Electrician',
    image: 'https://lh3.googleusercontent.com/d/1_Upd7JU5H1INiYc0gYTmJkUOF-1c6H2H',
    videoLink: 'https://www.instagram.com/p/DbDjhOSzgu5/',
    written: 'Andi Davalah',
    genre: 'Horror, Comedy',
    duration: '3 minutes',
    synopsis: "A short vertical horror-comedy about an electrician hired to fix the wiring at a suspicious woman's house."
  },
  {
    id: 5,
    year: 'Short Film - 2025',
    title: 'Kucing dalam Karung',
    image: 'https://lh3.googleusercontent.com/d/1F-x-8WnkLed3WGx3ZwgjwIWXmEsX6tlE',
    videoLink: 'https://youtu.be/-xPfw8miaY4',
    written: 'Andi Davalah',
    genre: 'Drama',
    duration: '5 Minutes',
    synopsis: "A small family's secret slowly unravels when an unexpected package arrives at their doorstep."
  },
  {
    id: 6,
    year: 'Short Film - 2024',
    title: 'Hipokrit',
    image: 'https://lh3.googleusercontent.com/d/1h8BQeT11J_NYMSxFPf8HbFq0FmCUeKWw',
    videoLink: 'https://youtu.be/uohkNCb4t4Y',
    written: 'Andi Davalah',
    genre: 'Socio-Critic, Comedy, Satire',
    duration: '10 Minutes',
    synopsis: 'Facing a tight academic project deadline, a college student has to carry the project alone when the group leader constantly ghosts them.'
  },
  {
    id: 7,
    year: 'Ads Content Video - 2024',
    title: 'Compass Shoes Ads',
    image: 'https://lh3.googleusercontent.com/d/1008WVMdOOzWdfkASmDJTEPvCX6x2vITz',
    videoLink: 'https://drive.google.com/file/d/1aPTFpRhq2RmTkhEgCauQK7ovx9NPxLW8/view?usp=sharing',
    written: 'Andi Davalah',
    genre: 'Comedy',
    duration: '1 Minutes',
    synopsis: 'Project for Compass shoes campaign "Berani Melangkah", about a group of boys who trying to get attention from a girl, the one who gets the attention is the one who wear the Compass shoes.'
  },
  {
    id: 8,
    year: 'Ads Content Video - 2024',
    title: 'Manajeri-in Aja!',
    image: 'https://lh3.googleusercontent.com/d/1NPEhZh7DmFPGklzKtRsVnlB4-HqVJiYE',
    videoLink: 'https://www.youtube.com/watch?v=gEnT2aiAxKY',
    written: 'Andi Davalah',
    genre: 'Comedy',
    duration: '1 Minutes',
    synopsis: "Ads for app development project, about a FnB business owner who gets panicked when his food supply is turning low."
  },
  {
    id: 9,
    year: 'Event Teaser - 2024',
    title: 'Changemakers Teaser',
    image: 'https://lh3.googleusercontent.com/d/1iALV9Y04Y04bseLeQ6TzkHn3HxQsobpX',
    videoLink: 'https://drive.google.com/file/d/15tyG5TSNkIz3JxNJnzDLv7iXxHtgv1iO/view?usp=sharing',
    written: 'Andi Davalah',
    genre: 'Sketch-Comedy',
    duration: '4 Minutes',
    synopsis: 'Sketch video for event teaser, about a man tasked with getting people to attend an event, but his bad reputation makes the job difficult.'
  },
];

// Render kartu di grid
const container = document.getElementById('portfolio-grid');
container.innerHTML = projects.map(item => `
  <div class="project-card" onclick="openModal(${item.id})">
    <div class="image-container">
      <img src="${item.image}" alt="${item.title}" loading="lazy">

      <div class="project-overlay">
        <div class="overlay-details">
          ${item.written ? `
            <div class="overlay-section">
              <span class="overlay-label">WRITTEN & DIRECTED BY</span>
              <p class="overlay-value">${item.written}</p>
            </div>
          ` : ''}

          ${item.genre ? `
            <div class="overlay-section">
              <span class="overlay-label">GENRE</span>
              <p class="overlay-value">${item.genre}</p>
            </div>
          ` : ''}

          ${item.duration ? `
            <div class="overlay-section">
              <span class="overlay-label">DURATION</span>
              <p class="overlay-value">${item.duration}</p>
            </div>
          ` : ''}
        </div>

        <div class="overlay-badge">${item.title}</div>
      </div>
    </div>

    <div class="project-info">
      <span class="project-year">${item.year}</span>
      <h2 class="project-title">${item.title}</h2>
    </div>
  </div>
`).join('');

// =================================================
// LOGIKA SLIDING MENU DRAWER
// =================================================
const menuDrawer = document.getElementById('menuDrawer');

function openMenu() {
  menuDrawer.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menuDrawer.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function closeMenuOnOverlay(e) {
  if (e.target === menuDrawer) {
    closeMenu();
  }
}

// =================================================
// LOGIKA POP-UP MODAL PROYEK
// =================================================
const modal = document.getElementById('projectModal');

function openModal(id) {
  const project = projects.find(p => p.id === id);
  if (!project) return;

  document.getElementById('modalTitle').innerText = project.title;
  document.getElementById('modalYear').innerText = project.year;
  document.getElementById('modalSynopsis').innerText = project.synopsis || 'Sinopsis belum ditambahkan.';
  
  document.getElementById('modalVideoImg').src = project.image;
  document.getElementById('modalVideoLink').href = project.videoLink || '#';

  document.getElementById('modalWritten').innerText = project.written || '-';
  document.getElementById('modalGenre').innerText = project.genre || '-';
  document.getElementById('modalDuration').innerText = project.duration || '-';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function closeModalOnBackdrop(e) {
  if (e.target === modal) {
    closeModal();
  }
}

// Tutup Menu atau Modal dengan tombol ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (modal.classList.contains('active')) closeModal();
    if (menuDrawer.classList.contains('active')) closeMenu();
  }
});
