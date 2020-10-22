const load = () => {
	document.querySelectorAll(".btn-danger").forEach((button) => {
		button.addEventListener("click", remove)
	})
}

const remove = (E) => {
	E.target.parentElement.classList.add("deleted")
	alert(E.target.parentElement.classList)
}
window.onload = load
