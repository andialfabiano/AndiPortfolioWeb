// Data list portofolio
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
    image: 'https://lh3.googleusercontent.com/d/1kCQClzSMdKBmcQV2-al8AEYmrU0YAUwc',
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
    videoLink: 'https://drive.google.com/file/d/1t1YkVg4PrDJ7WGtxNDkCEhmfYSKAgG7W/view',
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
    videoLink: 'https://drive.google.com/file/d/1MzBh8FWladR1saWj93auGqbZahdIXVbr/view?usp=drive_link',
    written: 'Andi Davalah',
    genre: 'Drama',
    duration: '5 Minutes',
    synopsis: "A small family's secret slowly unravels when an unexpected package arrives at their doorstep."
  },
  {
    id: 6,
    year: 'Short Film - 2024',
    title: 'Hipokrit',
    image: 'https://lh3.googleusercontent.com/d/1BC8nrTbdt-ollUNlO5odpk5nvzSbvUBL',
    videoLink: 'https://drive.google.com/file/d/1zAwvhL7j18ZVmCTyAICZaItNsvYYiqR6/view?usp=sharing',
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
    videoLink: 'https://drive.google.com/file/d/1p_psUxUzOy2OIaVmZPqzePJhW2PxDM01/view?usp=drive_link',
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
    genre: 'Sketch-Comedy, Mockumentary',
    duration: '4 Minutes',
    synopsis: 'Sketch video for event teaser, about a man tasked with getting people to attend an event, but his bad reputation makes the job difficult.'
  },
  {
    id: 10,    
    year: 'Talking Head Video - 2023',
    title: 'Talking Head Suara Mahasiswa',
    image: 'https://lh3.googleusercontent.com/d/1_IDBacpdNzAlDTF1pcXkWe0aNsCzvXbs',
    videoLink: 'https://drive.google.com/file/d/1jGui0tby2NwFsITSdZTvXiDi1r0EzFtd/view?usp=sharing',
    written: 'Andi Davalah',
    genre: 'Talking Head, Tutorial',
    duration: '6 Minutes',
    synopsis: 'talking-head tutorial video introducing "Suara Mahasiswa," a digital platform designed to gather and channel student feedback and aspirations across the university community.'
  },
  {
    id: 11,
    year: 'Interview Documentary - 2022',
    title: 'Pipinos Bakery Interview',
    image: 'https://lh3.googleusercontent.com/d/1R6rY0Z_hPLb3IN8dRiYl_L4ivxzJRr8W',
    videoLink: 'https://drive.google.com/file/d/1Hf9TkOVHFyqJ9KxAB1_gD1ue7utAFsT5/view?usp=sharing',
    written: 'Andi Davalah',
    genre: 'Podcast, Interview, Documentary',
    duration: '11 Minutes',
    synopsis: 'A cinematic mini-documentary exploring the origins, baking discipline, and artisanal identity of Bandung-based Pipinos Bakery.'
  },
  {
    id: 12,
    year: 'Interview - 2022',
    title: 'After Movie Bising',
    image: 'https://lh3.googleusercontent.com/d/1cL0soTS_l7DECXSc3J4pi4kqSiU6_9IN',
    videoLink: 'https://drive.google.com/file/d/1WxOErXAj8UmfCB68INtGLuayAvUINaMW/view?usp=sharing',
    written: 'Andi Davalah',
    genre: 'Interview, After Movie',
    duration: '12 Minutes',
    synopsis: "A dynamic recap video, celebrating a university's business simulation orientation program. Centered around firsthand student interviews."
  },
];

// Render portofolio grid
const container = document.getElementById('portfolio-grid');
if (container) {
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
}

// Menu Drawer
const menuDrawer = document.getElementById('menuDrawer');
const menuOverlay = document.getElementById('menuOverlay');

function openMenu() {
  if (menuDrawer) menuDrawer.classList.add('active');
  if (menuOverlay) menuOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  if (menuDrawer) menuDrawer.classList.remove('active');
  if (menuOverlay) menuOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Format Embed URL Desktop
function getEmbedUrl(url) {
  if (!url) return '';

  if (url.includes('drive.google.com')) {
    const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
      return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
    }
  }

  let ytId = '';
  if (url.includes('youtube.com/watch')) {
    const ytMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    if (ytMatch && ytMatch[1]) ytId = ytMatch[1];
  } else if (url.includes('youtu.be/')) {
    const ytShortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    if (ytShortMatch && ytShortMatch[1]) ytId = ytShortMatch[1];
  }

  if (ytId) {
    return `https://www.youtube-nocookie.com/embed/${ytId}?rel=0&modestbranding=1`;
  }

  if (url.includes('instagram.com/p/') || url.includes('instagram.com/reel/')) {
    const cleanUrl = url.split('?')[0].replace(/\/$/, '');
    return `${cleanUrl}/embed`;
  }

  return url;
}

// Modal Pop-up Proyek (Adaptif: Desktop = Embed Langsung, HP = Link Tab Baru)
const modal = document.getElementById('projectModal');
const mediaContainer = document.getElementById('modalMediaContainer');

function openModal(id) {
  const project = projects.find(p => p.id === id);
  if (!project || !modal) return;

  document.getElementById('modalTitle').innerText = project.title;
  document.getElementById('modalYear').innerText = project.year;
  document.getElementById('modalSynopsis').innerText = project.synopsis || 'Sinopsis belum ditambahkan.';
  document.getElementById('modalWritten').innerText = project.written || '-';
  document.getElementById('modalGenre').innerText = project.genre || '-';
  document.getElementById('modalDuration').innerText = project.duration || '-';

  if (mediaContainer) {
    // Deteksi jika dibuka dari layar handphone (lebar <= 768px)
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // TAMPILAN HP: Gambar Thumbnail + Tombol Buka Video di Tab Baru
      mediaContainer.innerHTML = `
        <a href="${project.videoLink}" target="_blank" rel="noopener noreferrer" class="modal-mobile-link">
          <img src="${project.image}" alt="${project.title}">
          <div class="mobile-play-btn">
            <span>▶ Play Video</span>
          </div>
        </a>
      `;
    } else {
      // TAMPILAN DESKTOP: Langsung putar video di dalam web lewat iframe
      const embedUrl = getEmbedUrl(project.videoLink);
      if (embedUrl) {
        mediaContainer.innerHTML = `
          <iframe 
            src="${embedUrl}" 
            title="${project.title}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        `;
      } else {
        mediaContainer.innerHTML = '';
      }
    }
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (mediaContainer) {
      mediaContainer.innerHTML = '';
    }
  }
}

function closeModalOnBackdrop(e) {
  if (e.target === modal) {
    closeModal();
  }
}

// ESC Key Listener
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeMenu();
  }
});
