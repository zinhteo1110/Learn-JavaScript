/* Viết hàm nếu nhấn button lần 1 sẽ thực hiện hàm 1
	nhấn button lần 2 sẽ thực hiện hàm 2
	==> 
*/
const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.innerHTML = `Click count: ${event.detail}`;
});

