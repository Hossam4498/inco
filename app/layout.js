import "./normalize.css";
import "./global.css";
import Favicon from "/public/inco.ico";

export const metadata = {
  manifest: "/manifest.json",
  icons: [{ rel: "icon", url: Favicon.src }],
  title: "INCO",
  description: `Welcome to INCO Architects. Discover visionary 
  architectural and interior design solutions crafted with expertise 
  and creativity. Let's bring your dream spaces to life together.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
