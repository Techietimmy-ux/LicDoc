const readMore = document.querySelectorAll('.readMore')


readMore.forEach((read) => {
  
  read.addEventListener('click', (e) => {
    read.classList.add('d-none');
    read.parentElement.querySelector('.moreRead').classList.remove('d-none')
      

  })

})



