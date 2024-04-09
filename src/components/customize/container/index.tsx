import { Text } from "@shopify/polaris";
import { FC } from "react";

type Props = {
	children: React.ReactNode;
	title: string;
	className?: string;
};

const Container: FC<Props> = ({ children, title, className }) => {
	return (
		<div className="flex flex-col gap-1 p-4">
			<Text variant="headingMd" as="h6">
				{title}
			</Text>
			<div className={className}>{children}</div>
		</div>
	);
};

export default Container;
