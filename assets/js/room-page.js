// Room page specific functionality
const roomPage = {
  init() {
    this.initGallery();
    this.initCalendar();
    this.initRoomSelector();
  },

  initGallery() {
    const galleryImages = document.querySelectorAll('.room-gallery__image');
    const modal = document.querySelector('.gallery-modal');
    const modalImage = document.querySelector('.gallery-modal__image');
    const closeButton = document.querySelector('.gallery-modal__close');

    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        modalImage.src = img.src;
        modal.classList.add('active');
      });
    });

    closeButton?.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  },

  initCalendar() {
    // Calendar widget initialization is handled by Beds24
    const calendarContainer = document.querySelector('.calendar-wrapper');
    if (calendarContainer) {
      calendarContainer.classList.add('fade-in');
    }
  },

  initRoomSelector() {
    const selector = document.querySelector('.room-selector select');
    if (selector) {
      selector.addEventListener('change', (e) => {
        const url = e.target.value;
        if (url) {
          window.location.href = url;
        }
      });
    }
  }
};

export default roomPage;