const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scroll-boxshadow');
    } else {
        header.classList.remove('scroll-boxshadow');
    }
})

function showTab(tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  // Remove active class from all buttons
  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });

  // Show selected tab content
  document.getElementById(tabName).classList.add("active");

  // Add active class to clicked button
  event.target.classList.add("active");
}

 // Add click functionality to cards
 document.querySelectorAll('.insight-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('.card-title').textContent;
        console.log('Clicked on:', title);
        // Add your navigation logic here
    });
});

// Add hover effects
document.querySelectorAll('.insight-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});