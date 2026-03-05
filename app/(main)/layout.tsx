import Navbar from "@/components/Navbar";
import TanStackProviders from "@/components/TanStackProviders";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <TanStackProviders>{children}</TanStackProviders>
    </>
  );
}
