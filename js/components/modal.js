export class Modal {
  constructor() {
      document.addEventListener('DOMContentLoaded', () => {
          var closeModalBtn = document.getElementById('closeModalBtn');
          var modalQuestion = document.getElementById('modal');
          var body = document.body;

          function openModal() {
              if (modalQuestion) {
                  modalQuestion.classList.add('active');
              }
              if (body) {
                  body.classList.add('overflow-hidden');
              }
          }

          function closeModal() {
              if (modalQuestion) {
                  modalQuestion.classList.remove('active');
              }
              if (body) {
                  body.classList.remove('overflow-hidden');
              }
          }

          if (closeModalBtn) {
              closeModalBtn.addEventListener('click', closeModal);
          }

          var isFirstVisit = localStorage.getItem('isFirstVisit');

          if (!isFirstVisit) {
              setTimeout(() => {
                  openModal();
                  localStorage.setItem('isFirstVisit', 'true');
              }, 5000);
          }
      });
  }
}