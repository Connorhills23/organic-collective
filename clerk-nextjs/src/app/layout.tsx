import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import AppLayout from "@/components/AppLayout";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  return (
    <ClerkProvider afterSignOutUrl="/sign-in">
      <html lang="en">
        <body>{userId ? <AppLayout>{children}</AppLayout> : children}</body>
      </html>
    </ClerkProvider>
  );
}
