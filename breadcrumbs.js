// Configuration for pages and their titles
const breadcrumbConfig = {
  'index.html': 'Home',
  'about.html': 'About',
  'contact.html': 'Contact',
};

// Function to generate breadcrumbs
function generateBreadcrumbs() {
  const breadcrumbContainer = document.querySelector('nav[aria-label="breadcrumb"] ol');
  const currentPage = window.location.pathname.split('/').pop(); // Get the current page name
  const homePage = 'index.html'; // Define your home page

  // Create the Home breadcrumb
  let breadcrumbHTML = `<li><a href="${homePage}">${breadcrumbConfig[homePage]}</a></li>`;

  // Add the current page breadcrumb if it exists in the config
  if (breadcrumbConfig[currentPage] && currentPage !== homePage) {
    breadcrumbHTML += `<li>${breadcrumbConfig[currentPage]}</li>`;
  }

  // Inject the breadcrumb HTML
  breadcrumbContainer.innerHTML = breadcrumbHTML;
}

// Generate breadcrumbs when DOM is ready
document.addEventListener('DOMContentLoaded', generateBreadcrumbs);
