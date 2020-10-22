const load = () => {
	document.querySelectorAll(".btn-danger").forEach((button) => {
		button.addEventListener("click", remove)
	})
}

const remove = (E) => {
	alert(E.target.parentElement.innerHTML)
}
window.onload = load
