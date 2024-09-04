document.addEventListener('DOMContentLoaded', function () {
    const collapsibleButton = document.querySelector('.collapsible');
    const loginContent = document.querySelector('.login-content');
    const adminLoginForm = document.getElementById('admin-login');
    const staffLoginForm = document.getElementById('staff-login');
    const toggleAdminButton = document.getElementById('toggle-admin');
    const toggleStaffButton = document.getElementById('toggle-staff');
  
    // Toggle collapsible login section
    collapsibleButton.addEventListener('click', function () {
      this.classList.toggle('active');
      if (loginContent.style.maxHeight) {
        loginContent.style.maxHeight = null;
      } else {
        loginContent.style.maxHeight = loginContent.scrollHeight + 'px';
      }
    });
  
    // Show admin login form and hide staff login form
    toggleAdminButton.addEventListener('click', function () {
      adminLoginForm.classList.remove('hidden');
      staffLoginForm.classList.add('hidden');
    });
  
    // Show staff login form and hide admin login form
    toggleStaffButton.addEventListener('click', function () {
      staffLoginForm.classList.remove('hidden');
      adminLoginForm.classList.add('hidden');
    });
  });
  