document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const mainContent = document.querySelector('.main-content');
        Array.from(mainContent.children).forEach(child => {
            if(!child.classList.contains('tabs')){
                child.classList.add('hidden');
            }
        });
        
        const tabsContainer = document.querySelector('.tabs');
        tabsContainer.classList.remove('hidden');
        tabsContainer.classList.add('visible');
        
        const generalTabs = document.querySelectorAll('.generalTab');
        generalTabs.forEach(gTab => {
          gTab.classList.add('hidden');
          gTab.classList.remove('active-tab');
        });
        
        const clickedId = tab.getAttribute('id');
        const contentId = clickedId + 'Tab';
        const selectedContent = document.querySelector(`#${contentId}`);
        
        selectedContent.classList.remove('hidden');
        selectedContent.classList.add('active-tab');
      });
    });
});