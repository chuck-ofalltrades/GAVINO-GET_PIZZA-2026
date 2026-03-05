// js/menu-tabs.js

function switchTab(category) {
  // 1. Hide all menu content grids
  const allContents = document.querySelectorAll('.menu-content');
  allContents.forEach(content => {
    content.classList.add('hidden');
    content.classList.remove('grid', 'grid-cols-2', 'md:grid-cols-2');
  });

  // 2. Show the targeted menu content grid
  const targetContent = document.getElementById('content-' + category);
  targetContent.classList.remove('hidden');
  targetContent.classList.add('grid', 'grid-cols-2', 'md:grid-cols-2');

  // 3. Reset all tabs to the "inactive" state
  const allTabs = document.querySelectorAll('.tab-btn');
  allTabs.forEach(tab => {
    tab.className = 'tab-btn size-[62px] md:size-[72px] border-2 border-transparent hover:border-secondary p-0 rounded-full flex items-center justify-center cursor-pointer transition-all';
    tab.querySelector('.tab-icon').classList.add('opacity-80');
  });

  // 4. Highlight the clicked tab as "active"
  const activeTab = document.getElementById('tab-' + category);
  activeTab.className = 'tab-btn size-[70px] md:size-[80px] border-2 border-secondary p-1 rounded-full flex items-center justify-center cursor-pointer transition-all';
  activeTab.querySelector('.tab-icon').classList.remove('opacity-80');
}

// Function specifically for the yellow pill text menu on menu.html
function switchMenuTab(category) {
  // 1. Hide all grids
  const allContents = document.querySelectorAll('.menu-page-content');
  allContents.forEach(content => {
    content.classList.add('hidden');
    content.classList.remove('grid');
  });

  // 2. Show target grid
  const targetContent = document.getElementById('page-content-' + category);
  if (targetContent) {
    targetContent.classList.remove('hidden');
    // We re-add grid-cols-2 for mobile and grid-cols-3 for desktop
    targetContent.classList.add('grid', 'grid-cols-2', 'md:grid-cols-3'); 
  }

  // 3. Reset text styling for all yellow pill buttons
  const allTabs = document.querySelectorAll('.menu-page-tab');
  allTabs.forEach(tab => {
    tab.classList.remove('text-primary', 'font-black');
    tab.classList.add('text-tertiary', 'font-bold');
  });

  // 4. Highlight the clicked text button
  const activeTab = document.getElementById('menu-tab-' + category);
  if (activeTab) {
    activeTab.classList.remove('text-tertiary', 'font-bold');
    activeTab.classList.add('text-primary', 'font-black');
  }
}