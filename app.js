function thisis() {
	let inp = document.getElementById('addNote');
	inp.innerHTML += '<input type="text" class="inputNote"><br>';
}
function saveNote() {
	let addNote = document.getElementById('addNote');
	addNote.append('<p>This is added.</p>');
}
