/* DESIGN: Dark Industrial Command Center — Page layout wrapper */
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground scan-lines">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
