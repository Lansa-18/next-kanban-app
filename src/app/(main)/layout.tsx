import SideNavigation from "@/_components/SideNavigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  <div>
    <SideNavigation />
    <main>{children}</main>
  </div>;
}
