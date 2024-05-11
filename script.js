//let name = "Леша"
//let age = 14
//let sovershevno = true 

//console.log("Имя" + name1)
//console.log("Возрост" + age)
//console.log(sovershevno)

//let h1 = document.querySelector("h1")
//h1.style.color = "green"
//h1.textContent = "Всем пока"

//let sitebody = document.querySelector(".site_body")

//sitebody.innerHTML = "<img src = 'img/Logo'></img>"

//let btn = document.querySelector("button")
//btn.addEventListener('click', function(){
//alert("И тебе привет")
//})

//let burger = document.querySelector('.burger-menu')
//let nav = document.querySelector('.nav-list')
//burger.addEventListener('click', function(){
    //burger.classList.toggle('active')
    //nav.classList.toggle('active')
//})

$('.carusel').slick({
    centerMode: true,
    centerPadding: '60px',
    prevArrow: '<img src="Arrow_left.svg">',
    nextArrow: '<img src="Arrow_right.svg">',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });