// Root layout is a passthrough — locale layout handles html/body/providers
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
