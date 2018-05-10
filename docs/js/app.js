window.onload = function() {
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	const bingo = new Image();
	bingo.src = "assets/bingo.png";
	bingo.onload = function() {
		ctx.drawImage(bingo, 0, 0);
	}

	const mark = new Image();
	mark.src = "assets/mark.png";

	canvas.addEventListener('click', function(e) {
		
		const ratio = 690/this.offsetWidth;
		let square_size = Math.floor( (this.offsetWidth)/5*ratio);
		
		const clickX = Math.floor((e.layerX-this.offsetLeft)*ratio);
		const clickY = Math.floor((e.layerY-this.offsetTop)*ratio);

		let positionX = clickX-(clickX%square_size);
		let positionY = clickY-(clickY%square_size);

		ctx.drawImage(mark, positionX, positionY);
		
	});

	document.getElementById('download').addEventListener('click', function() {
		var canvas = document.getElementById("canvas");
		var link = document.getElementById("download_link");
		link.setAttribute('download', 'bingo.jpg');
		link.setAttribute('href', canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream"));
		link.click();
	});
}
