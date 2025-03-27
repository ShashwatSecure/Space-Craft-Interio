"use client"

import React, { useState, useEffect } from "react"
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"
import { usePathname } from "next/navigation"
import path from "path"
import { menuItems } from "@/utils/constants"

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
                // setIsOpen(false)
                // setMobileDropdown(null)
            }
        }
        document.addEventListener("click", handleClickOutside)
        return () => document.removeEventListener("click", handleClickOutside)
    }, [])

    const handleLinkClick = () => {
        setActiveDropdown(null) // Close desktop dropdown
        setMobileDropdown(null) // Close mobile dropdown
        setIsOpen(false) // Close mobile menu
    }

    return (
        <nav className="bg-white shadow-sm fixed top-0 w-full z-50">
            <div className="md:mx-4 mx-0 flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    <Link href="/" onClick={handleLinkClick}>
                        Space<span className="text-orange-500">Craft</span>
                        Interio
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex space-x-6 text-gray-600 text-sm relative">
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={`relative text-sm ${
                                item.sublinks.length > 0
                                    ? "dropdown-parent"
                                    : ""
                            }`}
                        >
                            {item.sublinks.length > 0 ? (
                                <>
                                    <button
                                        onClick={() => handleDropdown(index)}
                                        className={`hover:text-orange-500 transition duration-300 ${
                                            pathname.includes(
                                                item.link || "//"
                                            ) && "text-orange-500"
                                        }`}
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
                                                            href={path.join(
                                                                "/",
                                                                item.link!,
                                                                sublink.href
                                                            )}
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
                                    className={`hover:text-orange-500 transition duration-300 ${
                                        pathname === item.href &&
                                        "text-orange-500"
                                    }`}
                                    onClick={handleLinkClick}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Get Estimate Button */}
                {/* <div className="flex gap-6">
                    <FaWhatsapp className="size-12 text-green-600 p-2 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => window.location.href = "https://wa.me/+916290197361"} />
                    <Button>Get Free Estimate</Button>
                </div> */}

                <div
                    className="items-center justify-center gap-2 py-2 px-6 bg-green-500 rounded-sm transition-colors cursor-pointer hover:bg-green-700 md:flex hidden"
                    onClick={() =>
                        (window.location.href = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`)
                    }
                >
                    <FaWhatsapp className="size-6 text-white transition-colors" />
                    {/* <Button>Get Free Estimate</Button> */}
                    <span className="text-sm uppercase text-white font-semibold transition-colors">Contact Us</span>
                </div>

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
                            <li key={index} className="relative text-left">
                                {item.sublinks.length > 0 ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                handleMobileDropdown(index)
                                            }
                                            className="block text-sm text-left font-medium hover:text-orange-500 transition duration-300 w-full"
                                        >
                                            {item.name}{" "}
                                            {mobileDropdown === index
                                                ? <ChevronUp className="inline size-3" />
                                                : <ChevronDown className="inline size-3" />}
                                        </button>
                                        {mobileDropdown === index && (
                                            <ul className="mt-2 bg-gray-100 rounded-md">
                                                {item.sublinks.map(
                                                    (sublink, subIndex) => (
                                                        <li
                                                            key={subIndex}
                                                            className="px-4 py-2 text-sm hover:bg-gray-200"
                                                        >
                                                            <Link
                                                                href={path.join(
                                                                    "/",
                                                                    item.link!,
                                                                    sublink.href
                                                                )}
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
                                        className="block text-sm font-medium hover:text-orange-500 transition duration-300"
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
