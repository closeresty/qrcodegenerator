function handleSubmit(event) {
	event.preventDefault();
	let text = document.getElementById("inptxt").value;
	let qrsrc =
		`http://api.qrserver.com/v1/create-qr-code/?data=${text}`;
	let qrimg = document.getElementById("qrimg");
	qrimg.src = qrsrc;
}
