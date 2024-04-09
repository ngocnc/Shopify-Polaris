export const calculateDiscountedPrice = (
	originalPrice: number,
	discountPercentage: number
): number => {
	const discountAmount = originalPrice * (discountPercentage / 100);
	return originalPrice - discountAmount;
};

export const convertPrice = (price: number): string => {
	const formatter = new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
	});
	return formatter.format(price);
};

export const calculateAndFormatPrice = (
	originalPrice: number,
	discountPercentage: number
): string => {
	return convertPrice(
		calculateDiscountedPrice(originalPrice, discountPercentage)
	);
};

export const variableToPixel = (value: string): string => {
	return `${value}px`;
};
