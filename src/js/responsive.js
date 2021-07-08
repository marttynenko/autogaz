document.addEventListener('DOMContentLoaded',() => {
  const D = document
  const headerFlex = D.querySelector('.header-flex');
  headerFlex.insertAdjacentHTML('beforeEnd',`
    <div class="mm-toggler" onclick=""><i class="mm-1"></i><i class="mm-2"></i><i class="mm-3"></i></div>
  `);


  D.querySelector('.mm-toggler').addEventListener('click',function(e) {
    e.preventDefault()
    this.classList.toggle('opened')
    D.querySelector('.header-menu').classList.toggle('opened')
  })
});