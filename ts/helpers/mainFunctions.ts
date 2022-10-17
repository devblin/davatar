const r = commonColor();
const g = commonColor();
const b = commonColor();

export function commonColor(): number {
	return Math.floor(Math.random() * 255);
}

export function getTextColor(): string {
	return `rgb(${r}, ${g}, ${b})`;
}

export function getBackgroundColor(): string {
	return `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
}

export function generateInitials(text: string): string {
	if (text.length == 2)
		return text.toUpperCase();

	let newText = text.split(" "), initials = "";

	if (newText.length > 1)
		initials = newText[0][0] + newText[1][0];
	else
		initials = newText[0].substr(0, 2);

	return initials.toUpperCase();
}

