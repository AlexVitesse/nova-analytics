"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Menu, Sun, Moon, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "/about", label: "About" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <Image src="/logo-icon.png" alt="Nova Analytics" width={32} height={32} className="size-8 dark:invert" />
          <span className="text-lg font-bold text-foreground">Nova Analytics</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="size-9 rounded-lg"
          >
            {mounted && (
              theme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <a href="/auth/sign-in">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </a>
          <a href="/auth/sign-up">
            <Button size="sm" className="gap-1.5">
              Get Started
              <ArrowRight className="size-3.5" />
            </Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="size-9"
          >
            {mounted && (
              theme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="size-9">
                <Menu className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col p-6">
                <a href="/" className="flex items-center gap-2.5">
                  <Image src="/logo-icon.png" alt="Nova Analytics" width={32} height={32} className="size-8 dark:invert" />
                  <span className="text-lg font-bold text-foreground">Nova Analytics</span>
                </a>
                
                <nav className="mt-8 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="py-3 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6">
                  <a href="/auth/sign-in">
                    <Button variant="outline" className="w-full justify-center">
                      Log in
                    </Button>
                  </a>
                  <a href="/auth/sign-up">
                    <Button className="w-full justify-center gap-1.5">
                      Get Started
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
