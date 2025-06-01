"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home, Settings, Terminal, Shield, FileText, Clipboard } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: <Home className="h-4 w-4 mr-2" />,
    },
    {
      name: "Content Audit",
      href: "/admin/content-audit",
      icon: <FileText className="h-4 w-4 mr-2" />,
    },
    {
      name: "Launch Checklist",
      href: "/testing/content-audit",
      icon: <Clipboard className="h-4 w-4 mr-2" />,
    },
    {
      name: "Security",
      href: "/admin/security",
      icon: <Shield className="h-4 w-4 mr-2" />,
    },
    {
      name: "Developer Tools",
      href: "/admin/dev-tools",
      icon: <Terminal className="h-4 w-4 mr-2" />,
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: <Settings className="h-4 w-4 mr-2" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Admin Header */}
      <header className="bg-primary text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-white hover:text-white/80 transition">
              <Home className="h-5 w-5" />
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-white/60" />
            <Link href="/admin" className="font-medium">
              Admin
            </Link>
            {pathname !== "/admin" && (
              <>
                <ChevronRight className="h-4 w-4 mx-2 text-white/60" />
                <span className="font-medium">
                  {pathname.split("/").pop()?.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase())}
                </span>
              </>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm bg-white/20 px-2 py-1 rounded">Development Mode</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-900">
        {children}
      </main>

      {/* Admin Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-3 px-6 text-sm text-gray-500 dark:text-gray-400">
        <div className="container mx-auto">
          <p>Pledge and Grow Admin - For development and testing purposes only</p>
        </div>
      </footer>
    </div>
  );
}
