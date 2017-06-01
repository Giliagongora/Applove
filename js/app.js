/*
 * Archivo principal de funcionalidad de JS
 */
(function serv(){
	/* crea un array.from de todo lo que devolvera el getElement para hacer un forEach,
	en este caso llamo las imagenes por su class(uno)*/ 
	var caja = array.form(document.getElementsByClassName("uno")); 

	var modal = document.getElementById("Modal");

	var elementoModal, close, img;
	caja.forEach(function(caja){
		box.addEventListener("click", function(){
			modal.innerHTML = "";
			elementoModal = document.createElement("div");
			elementoModal.close.classList.add("modal");
			elementoModal.innerHTML = box.innerHTML;
			modal.appendChild(elementoModal);
			modal.classList.remove("hide");
			close = document.createElement("div");
			close.classList.add("close");
			
		})
	})


 /*
(function main(){
	var boxes = Array.from(document.getElementsByClassName("box-services"));
	var modal = document.getElementById("box-services-modal");
	var bodyModal, close, img;
	boxes.forEach(function(box){
		box.addEventListener("click", function(){
			modal.innerHTML = "";
			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = box.innerHTML;			
			modal.appendChild(bodyModal);
			modal.classList.remove("hide");
			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
			close.appendChild(img);
			modal.appendChild(close);
			close.addEventListener("click",function(){
				modal.classList.add("hide");
			});
		});		
	});
})();

*/