"use client"

import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"
import Button from "./Button"
import { usePathname } from "next/navigation"
import path from "path"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
    const [mobileDropdown, setMobileDropdown] = useState<number | null>(null)
    const pathname = usePathname()

    // Toggle dropdown for desktop
    const handleDropdown = (index: number) => {
        setActiveDropdown(activeDropdown === index ? null : index)
    }

    // Toggle dropdown for mobile
    const handleMobileDropdown = (index: number) => {
        setMobileDropdown(mobileDropdown === index ? null : index)
    }

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!(event.target as HTMLElement).closest(".dropdown-parent")) {
                setActiveDropdown(null)
            }
        }
        document.addEventListener("click", handleClickOutside)
        return () => document.removeEventListener("click", handleClickOutside)
    }, [])

  const menuItems = [
    {
      name: "Designs",
      link: "/designs",
      sublinks: [
        { title: "All Designs", href: "/interior-design" },
        { title: "Modular Kitchen", href: "/modular-kitchen" },
        { title: "Living Room", href: "/living-room" },
        { title: "Bedroom", href: "/bedroom" },
        { title: "Kids Bedroom", href: "/kids-bedroom" },
        { title: "Wardrobe", href: "/wardrobe" },
        { title: "Dining Room", href: "/dining-room" },
        { title: "Pooja Room", href: "/pooja-room" },
        { title: "Space Saving", href: "/space-saving" },
        { title: "Home Office", href: "/home-office" },
        { title: "Bathroom", href: "/bathroom" },
        { title: "Balcony", href: "/balcony" },
        { title: "1 BHK Interior", href: "/1bhk" },
        { title: "2 BHK Interior", href: "/2bhk" },
        { title: "3 BHK Interior", href: "/3bhk" },
      ],
    },
    { name: "Recent Projects", href: "/recent-projects", sublinks: [] },
    { name: "Reviews", href: "/customer-reviews", sublinks: [] },
    { name: "Site Services", href: "/site-services", sublinks: [] },
    {
      name: "Guides",
      link: "guides",
      sublinks: [
        { title: "Modular Kitchen Guides", href: "/modular-kitchen-guide" },
        { title: "Living Room Guides", href: "/living-room-guide" },
        { title: "Bedroom Guides", href: "/bedroom-guide" },
        { title: "Kids Bedroom Guides", href: "/kids-bedroom-guide" },
        { title: "Wardrobe Guides", href: "/wardrobe-guide" },
        { title: "Dining Room Guides", href: "/dining-room-guide" },
        { title: "Study Room Guides", href: "/study-room-guide" },
        { title: "Bathroom Guides", href: "/bathroom-guide" },
        { title: "Balcony Guides", href: "/balcony-guide" },
      ],
    }
  ];

    const handleLinkClick = () => {
        setActiveDropdown(null) // Close desktop dropdown
        setMobileDropdown(null) // Close mobile dropdown
        setIsOpen(false) // Close mobile menu
    }

    return (
        <nav className="bg-white shadow-sm fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    <Link href="/">
                        Space<span className="text-orange-500">Craft</span>
                        Interio
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex space-x-6 text-gray-600 relative">
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={`relative ${
                                item.sublinks.length > 0
                                    ? "dropdown-parent"
                                    : ""
                            }`}
                        >
                            {item.sublinks.length > 0 ? (
                                <>
                                    <button
                                        onClick={() => handleDropdown(index)}
                                        className={`hover:text-orange-500 transition duration-300 ${pathname.includes(item.link || "//") && 'text-orange-500'}`}
                                    >
                                        <span>{item.name}</span>
                                        {activeDropdown === index ? (
                                            <ChevronUp className=" inline size-4" />
                                        ) : (
                                            <ChevronDown className=" inline size-4" />
                                        )}
                                    </button>
                                    {activeDropdown === index && (
                                        <ul className="absolute left-0 mt-2 w-56 bg-white shadow-md rounded-md transition-opacity duration-300 max-h-80 overflow-y-auto">
                                            {item.sublinks.map(
                                                (sublink, subIndex) => (
                                                    <li
                                                        key={subIndex}
                                                        className="px-4 py-2 hover:bg-gray-100"
                                                    >
                                                        <Link
                                                            href={path.join("/", item.link!, sublink.href)}
                                                            className="text-gray-600 text-sm block"
                                                            onClick={
                                                                handleLinkClick
                                                            }
                                                        >
                                                            {sublink.title}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={item.href || "#"}
                                    className={`hover:text-orange-500 transition duration-300 ${pathname === item.href && 'text-orange-500'}`}
                                    onClick={handleLinkClick}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Get Estimate Button */}
                <Button>Get Free Estimate</Button>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-gray-700 text-2xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white shadow-md absolute top-16 left-0 w-full px-6 py-4 max-h-[80vh] overflow-y-auto">
                    <ul className="flex flex-col space-y-4 text-gray-700">
                        {menuItems.map((item, index) => (
                            <li key={index} className="relative">
                                {item.sublinks.length > 0 ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                handleMobileDropdown(index)
                                            }
                                            className="block text-lg font-medium hover:text-orange-500 transition duration-300 w-full text-left"
                                        >
                                            {item.name}{" "}
                                            {mobileDropdown === index
                                                ? "▲"
                                                : "▼"}
                                        </button>
                                        {mobileDropdown === index && (
                                            <ul className="mt-2 bg-gray-100 rounded-md">
                                                {item.sublinks.map(
                                                    (sublink, subIndex) => (
                                                        <li
                                                            key={subIndex}
                                                            className="px-4 py-2 hover:bg-gray-200"
                                                        >
                                                            <Link
                                                                href={
                                                                    sublink.href
                                                                }
                                                                className="text-blue-600 block"
                                                                onClick={
                                                                    handleLinkClick
                                                                }
                                                            >
                                                                {sublink.title}
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href || "#"}
                                        className="block text-lg font-medium hover:text-orange-500 transition duration-300"
                                        onClick={handleLinkClick}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
