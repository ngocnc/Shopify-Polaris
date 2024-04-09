import { Card, Text } from "@shopify/polaris";
import { FC } from "react";

type Props = {
	children: React.ReactNode;
	title: string;
};

const CardCustom: FC<Props> = ({ children, title }) => {
	return (
		<div className="my-5 [&_.Polaris-Box]:!px-0">
			<Card background="bg-surface">
				<div className="px-4 pb-4">
					<Text variant="headingMd" as="h6">
						{title}
					</Text>
				</div>
				<div className="">{children}</div>
			</Card>
		</div>
	);
};

export default CardCustom;
