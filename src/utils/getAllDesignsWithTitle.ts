import fs from "fs"
import path from "path"

// const fs = require("fs")
// const path = require("path")

export interface Items {
    imageUrl: string,
    title: string,
}

export interface Interior {
    title: string;
    items: Array<Items>
}

const getAllDesignWithTitle = () => {
    const dataPath = path.join(__dirname, "../..", "public", "images")
    const folders = fs.readdirSync(dataPath)

    const imageBasePath = "images"
    const interiors: Interior[] = []

    for(const folder of folders) {
        const images = fs.readdirSync(path.join(__dirname, "../..", "public", "images", folder))
        const items: Items[] = images.map((image) => ({
            title: path.parse(image).name,
            imageUrl: path.join(imageBasePath, folder, image)
        }))

        interiors.push({
            title: folder,
            items
        })
    }
    console.log(interiors)
    fs.writeFileSync("data.txt", JSON.stringify(interiors))
    return interiors

}

// getAllDesignWithTitle()
export default getAllDesignWithTitle