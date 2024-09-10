# Simple Vanilla Javascript Breadcrumbs
## How This Works:
1. **Configurable Breadcrumbs:** The breadcrumbConfig object holds the mappings between page filenames (index.html, about.html, contact.html) and their display titles
   (Home, About, Contact). You can easily modify this object if new pages are added.
3. **Home Page Link:** The home page (index.html) is always shown as the first breadcrumb, and additional breadcrumbs are dynamically added if the current page
   is found in the breadcrumbConfig.
4. **CSS Separator:** The CSS rule uses li + li::before to insert the > symbol between breadcrumbs (but not before the first breadcrumb). This keeps the
   HTML clean and focuses the styling in CSS.

### Other things to look at
- [How to Build Dynamic Breadcrumbs From a URL Path](https://cheatcode.co/blog/how-to-build-dynamic-breadcrumbs-from-a-url-path)   
- [akibrk/BreadCrumbs: Dynamic Breadcrumb Generator Using Javascript/Jquery](https://github.com/akibrk/BreadCrumbs?tab=readme-ov-file)   

