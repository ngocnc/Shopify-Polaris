import { RadioButton } from "@shopify/polaris";
import { FC, useCallback } from "react";

import { useVolumeDiscount } from "@/contexts/volumeDiscountContext";
import {
	calculateAndFormatPrice,
	convertPrice,
	variableToPixel,
} from "@/lib/utils";
import { TCard } from "../constants";

type CardProps = {
	card: TCard;
	index: number;
};

const Card: FC<CardProps> = ({ card, index }) => {
	const { border, color, pricing, typography, popular, setValue } =
		useVolumeDiscount();

	const handleChangeChecked = useCallback(
		(field: keyof typeof popular) => (_: boolean, newValue: string) => {
			setValue("popular", { [field]: newValue });
		},
		[setValue]
	);

	const isActive: boolean = card.id.toString() === popular.checked;
	const pricePreview: number = 100;

	return (
		<div
			className="cursor-pointer p-2 flex items-center justify-between"
			style={{
				borderRadius: variableToPixel(border.borderRadius),
				border: `${variableToPixel(border.borderWidth)} solid ${
					isActive ? color.barsPrimaryColor : "#ccc"
				}`,
				backgroundColor: color.barsBackground,
			}}
			onClick={() => handleChangeChecked("checked")(false, card.id.toString())}>
			<div className="flex items-center gap-2 flex-1">
				<RadioButton
					label=""
					checked={isActive}
					id={card.id.toString()}
					name="accounts"
					onChange={handleChangeChecked("checked")}
				/>
				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-2">
						<p
							style={{
								color: color.barsPrimaryColor,
								fontSize: variableToPixel(typography.barsTitle),
							}}>
							{card.title}
						</p>
						{card.popular && (
							<span
								className="rounded-full px-2 text-white italic py-0.5"
								style={{ backgroundColor: color.barsLabelBackground }}>
								Popular
							</span>
						)}
					</div>
					<p
						style={{
							color: color.barsSubTitle,
							fontSize: variableToPixel(typography.barsSubTitle),
						}}>
						{card.subTitle}
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<p
					style={{
						color: color.barsPrimaryColor,
						fontSize: variableToPixel(typography.barsTitle),
					}}>
					{!pricing.perItem
						? calculateAndFormatPrice(pricePreview * (index + 1), card.percent)
						: calculateAndFormatPrice(pricePreview, card.percent)}
				</p>

				{pricing.includePrice && (
					<p
						className="line-through"
						style={{
							color: color.barsSubTitle,
							fontSize: `${typography.barsSubTitle}px`,
						}}>
						{!pricing.perItem
							? convertPrice(pricePreview * (index + 1))
							: convertPrice(pricePreview)}
					</p>
				)}
			</div>
		</div>
	);
};

export default Card;
