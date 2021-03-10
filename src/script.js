class Davatar {
	constructor(dimension, text) {
		this.canvas = document.createElement("canvas");
		this.canvas.setAttribute("width", dimension);
		this.canvas.setAttribute("height", dimension);
		this.name = text;
	}

	generate = () => {
		console.log(this.#imgBgColor);
		console.log(this.#imgFontColor);
	};

	#imgFontColor = () => {
		return 1;
	};

	#imgBgColor = () => {
		return 11;
	};
}

export default {
	Davatar,
};
