import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import VolumeDiscountProvider from "./contexts/volumeDiscountContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AppProvider i18n={enTranslations}>
			<VolumeDiscountProvider>
				<App />
			</VolumeDiscountProvider>
		</AppProvider>
	</React.StrictMode>
);
