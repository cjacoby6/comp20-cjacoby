function init()
{
	var ctx = document.getElementById('game_canvas').getContext('2d');
	var img = new Image();
	img.src = "pacman10-hp-sprite.png";

	img.onload = function() {
		ctx.drawImage(img, 319, 0, 465, 137, 0, 0, 464, 135);
	};
}