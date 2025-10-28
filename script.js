document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('year').textContent = new Date().getFullYear();
  var btn = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  btn && btn.addEventListener('click', function(){
    nav.style.display = nav.style.display === 'block' ? '' : 'block';
  });
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    status.textContent = 'Sending (demo)...';
    setTimeout(() => {
      status.textContent = 'Message sent successfully! (Demo only)';
      form.reset();
    }, 800);
  });
});
