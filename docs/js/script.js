let slideBar = document.getElementById('bar-price'), output = document.getElementById('rangeValue');
let viewPages = document.getElementById('page-view')     
let selector = document.getElementById("selector");
let progressBar = document.getElementById("progressBar");
let sliderToggle = document.getElementById("slider-toggle")
let btnStart = document.getElementById('btn-start')
let price = 0;

  slideBar.oninput = function(){
    switch (this.value) {
      case "0": 
        display("10K", 8)
        break;
      case "25":
        display("50K", 12)
        break;
      case "50":
        display("100K", 16)
        break;
      case "75":
        display("1000K", 24)
        break;
      case "100": 
        display("1000K", 36)
        break;
        default:
          console.log("rien")
    }
    selector.style.left = this.value + "%";
    progressBar.style.width = this.value + "%";

  }
  slideBar.oninput()

  function display(views, valuePrice){
    viewPages.innerHTML = views;
    reducePrice25(valuePrice)
  }

  function reducePrice25(valuePrice) {
    if(sliderToggle.checked == true){
      output.innerHTML= "$" + (valuePrice*25)/100 + ".00"
      btnStart.classList.add('active')
      btnStart.addEventListener('click', ()=> {
        alert("La remise a bien été effectué")
      })
    }
    else{
      output.innerHTML= "$" + valuePrice + ".00";
      btnStart.classList.remove('active')

    }
    price = valuePrice;
  }

  sliderToggle.addEventListener('change', (e)=> {
      reducePrice25(price)
  })