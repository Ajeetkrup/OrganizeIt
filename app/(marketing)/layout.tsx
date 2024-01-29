import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Marketing Page",
  description: "Generated by create next app",
};

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default MarketingLayout;