const btn = document.getElementById('addToCart');
const btnImg = btn.getElementsByClassName('cart-img')[0];
const btnSpan = btn.getElementsByClassName('txt')[0];

function addToCart() {
  const clickColor = "hsl(159, 38%, 20%)";
  const defaultColor = "hsl(158, 36%, 37%)";
  
  btn.classList.toggle('clicked');
  if (btn.classList.contains('clicked')) {
    btn.style.backgroundColor = clickColor;
    setTimeout(() => {
      btn.classList.remove('clicked');
      btn.style.backgroundColor = defaultColor;
    }, 4000)
  } else {
    btn.style.backgroundColor = defaultColor;
  }
}

btn.addEventListener("click", addToCart);

