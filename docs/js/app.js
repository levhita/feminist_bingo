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

	canvas.addEventListener('click', function(e){
		const ratio = 700/window.innerWidth;

		let square_size = Math.floor(window.innerWidth/5*ratio);
		
		const virtualClickX= Math.floor(e.layerX*ratio);
		const virtualClickY= Math.floor(e.layerY*ratio);

		let clickX = virtualClickX-(virtualClickX%(square_size));
		let clickY = virtualClickY-(virtualClickY%(square_size));

		ctx.drawImage(mark, clickX, clickY);
	})
}

