"use client"

import { useEffect } from "react"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    useEffect(() => {
        ;(async () => {
            try {
                const url = `https://api.geoapify.com/v1/ipinfo?apiKey=${process.env.NEXT_PUBLIC_GEOAPI_KEY}`
                const res = await fetch(url, { method: "GET" })
                const data = await res.json()

                const { city, location } = data

                const body = {
                    city: city.name,
                    latitude: location.latitude,
                    longitude: location.longitude,
                }

                await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/session`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                }).then(async (res) => {
                    const { success, sessionToken } = await res.json()
                    if (success) console.log(sessionToken)
                    else console.log("Error while creating session!")
                })
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return children
}
