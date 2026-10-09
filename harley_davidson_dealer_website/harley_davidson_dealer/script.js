const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Filter the motorcycle collection.
const filterButtons = document.querySelectorAll('.filter');
const bikeCards = document.querySelectorAll('.bike-card');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    bikeCards.forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});

// Save/favorite model cards.
document.querySelectorAll('.heart').forEach(button => {
  button.addEventListener('click', () => {
    const saved = button.classList.toggle('saved');
    button.textContent = saved ? '♥' : '♡';
    button.setAttribute('aria-pressed', String(saved));
  });
});

// Model detail dialog.
const dialog = document.getElementById('modelDialog');
const dialogTitle = document.getElementById('dialogTitle');
document.querySelectorAll('.details-btn').forEach(button => {
  button.addEventListener('click', () => {
    dialogTitle.textContent = button.dataset.model.toUpperCase();
    dialog.showModal();
  });
});
document.getElementById('dialogClose').addEventListener('click', () => dialog.close());
document.getElementById('dialogContact').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});

// Demo form: validate fields and show an honest local confirmation.
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const customerName = String(formData.get('name')).trim();
  const model = String(formData.get('model')).trim();
  formNote.textContent = `Terima kasih, ${customerName}! Permintaan demo untuk ${model} sudah divalidasi di halaman ini. Formulir belum mengirim data ke dealer.`;
  formNote.style.color = '#287345';
  contactForm.querySelector('button[type="submit"]').innerHTML = 'INQUIRY READY <span>✓</span>';
});

document.getElementById('year').textContent = new Date().getFullYear();
