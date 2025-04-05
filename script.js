function changeProfile() {
	var img = document.getElementById("pfp");
	var filenames = [
        	"Christmas.png", "Diwali.png", "HalloweenS.png",
		"Holi.png", "IndependenceS.png", "IndependenceW.png",
		"OriginalS.png", "OriginalW.png", "Slept.png"
    	];
    	const randomIndex = Math.floor(Math.random() * filenames.length);
    	var imgName = filenames[randomIndex];
    	var imgPath = "resources/profiles/" + imgName;
    	img.src = imgPath;
}

document.getElementById("profileLink").addEventListener("click", function(event) {
	event.preventDefault();
    	changeProfile();
});

