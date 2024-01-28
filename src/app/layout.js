import "./globals.css";

export const metadata = {
  title: "Recode The Planet",
  description: "Recode The Planet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link
          rel="icon"
          href="../../public/footer-icons/recode-circle.png"
          sizes="any"
        />
        {children}
      </body>
    </html>
  );
}
