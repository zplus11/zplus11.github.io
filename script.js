document.addEventListener("DOMContentLoaded", () => {
	const pfp = document.getElementById("pfp");

	pfp.addEventListener("click", () => {
		const filenames = [
			"Christmas.png", "Diwali.png", "HalloweenS.png",
			"Holi.png", "IndependenceS.png", "IndependenceW.png",
			"OriginalS.png", "OriginalW.png", "Slept.png"
		];

		const imgName = filenames[Math.floor(Math.random() * filenames.length)];
		pfp.src = `/resources/profiles/${imgName}`;
	});
});
