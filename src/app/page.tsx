"use client"

import Container from "@/components/Container"
import Features from "@/components/Features"
import HeroSection from "@/components/HeroSection"
import Homepage from "@/components/Homepage"
import { useEffect } from "react"

export default function Home() {
    // Accessing the location and updating the session
    useEffect(() => {
        ;(async () => {
            try {
                const sessionToken = localStorage.getItem("sessionToken")
                if (!sessionToken) {
                    const url = `https://api.geoapify.com/v1/ipinfo?apiKey=${process.env.NEXT_PUBLIC_GEOAPI_KEY}`
                    const res = await fetch(url, { method: "GET" })
                    const data = await res.json()

                    const { city, location } = data

                    const body = {
                        city: city.name,
                        latitude: location.latitude,
                        longitude: location.longitude,
                    }

                    await fetch(
                        `${process.env.NEXT_PUBLIC_SERVER_URL}/session`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(body),
                        }
                    ).then(async (res) => {
                        console.log(res)
                        const { success, sessionToken } = await res.json()
                        if (success)
                            localStorage.setItem("sessionToken", sessionToken)
                    })
                } else {
                    await fetch(
                        `${process.env.NEXT_PUBLIC_SERVER_URL}/session`,
                        {
                            method: "GET",
                            credentials: "include"
                        }
                    )
                }
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (
        <Container>
            <HeroSection />
            <Homepage />
            <Features />
        </Container>
    )
}
