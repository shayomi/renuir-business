import "../globals.css";

import Nav from "@/components/shared/navbar/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Nav /> */}
      {children}
    </>
  );
}
