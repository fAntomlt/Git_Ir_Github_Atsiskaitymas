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
    
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            const currentTab = closeBtn.closest('.generalTab');
            if(currentTab){
              currentTab.classList.add('hidden');
              currentTab.classList.remove('active-tab');
            }

            const tabsContainer = document.querySelector('.tabs');
            tabsContainer.classList.add('hidden');
            tabsContainer.classList.remove('visible');

            document.querySelector('header').classList.remove('hidden');
            document.querySelector('footer').classList.remove('hidden');
        
            const mainContent = document.querySelector('.main-content');
            Array.from(mainContent.children).forEach(child => {
                if(!child.classList.contains('tabs')){
                    child.classList.remove('hidden');
                }
            });
        });
    });
});