import "@/styles/globals.css";
import "@/styles/themes/lite-blue.css";
import "@/styles/plugins/perfect-scrollbar.min.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
