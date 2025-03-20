export interface GuideData {
    title: string
    slug: string
    categories: Array<{ id: string; title: string }>
    content: Record<
        string,
        { title: string; description: string; imageUrl: string }
    >
}

export const guideData: GuideData[] = [
    {
        title: "Modular Kitchen Guide",
        slug: "modular-kitchen-guide",
        categories: [
            {
                id: "modular-vs-civil-kitchen",
                title: "Modular vs Civil Kitchen",
            },
            {
                id: "kitchen-layouts",
                title: "Different Types of Kitchen Layouts",
            },
            {
                id: "kitchen-materials",
                title: "Best Materials for Modular Kitchens",
            },
            {
                id: "modular-vs-custom",
                title: "Modular vs Custom-Built Kitchens",
            },
            { id: "kitchen-lighting", title: "Kitchen Lighting Guide" },
        ],
        content: {
            "modular-vs-civil-kitchen": {
                title: "Modular vs Civil Kitchen: Which One is Right for You?",
                description: `
          Choosing between a modular kitchen and a civil (carpenter-made) kitchen is one of the most important decisions in home design.  
          - **Modular Kitchens**: Factory-made, precise, sleek, smart storage, easy assembly, modern look.  
          - **Civil Kitchens**: Built on-site, customizable, traditional, takes longer to complete.  
          - **Cost & Maintenance**: Modular kitchens have a higher upfront cost but lower maintenance, while civil kitchens can be budget-friendly initially but less efficient long-term.  
          This guide helps you choose the right kitchen based on your budget and lifestyle.
        `,
                imageUrl: "/images/modular-vs-civil-kitchen.jpg",
            },
            "kitchen-layouts": {
                title: "Different Types of Kitchen Layouts",
                description: `
          Choosing the right kitchen layout ensures efficiency and aesthetics.  

          **1. Straight-Line Kitchen** – Compact, ideal for studio apartments.  
          **2. L-Shaped Kitchen** – Space-efficient, open-plan homes.  
          **3. U-Shaped Kitchen** – Best for larger spaces, offers great storage.  
          **4. Parallel (Galley) Kitchen** – Works well in narrow kitchens.  
          **5. Island Kitchen** – Luxurious, adds workspace & dining area.  
          **6. Peninsula Kitchen** – Semi-open design, attached island.  
          **7. G-Shaped Kitchen** – Extended counter for extra space.  

          The best layout depends on space availability, household size, and cooking habits.
        `,
                imageUrl: "/images/kitchen-layouts.jpg",
            },
            "kitchen-materials": {
                title: "Best Materials for Modular Kitchens",
                description: `
          Selecting the right materials ensures durability and aesthetics.  

          - **Plywood**: Strong, moisture-resistant (best: BWP plywood).  
          - **MDF & HDF**: Cost-effective, smooth finish, less durable than plywood.  
          - **Particle Board**: Budget-friendly, but not very durable.  
          - **Stainless Steel**: Ultra-durable, modern, easy to maintain.  
          - **Natural Wood**: Luxury choice, but needs maintenance.  
          - **Glass & Acrylic**: Stylish cabinet options for a sleek look.  
          - **Granite & Quartz**: Durable, heat-resistant countertop materials.  

          A combination of these materials balances budget, durability, and aesthetics.
        `,
                imageUrl: "/images/kitchen-materials.jpg",
            },
            "modular-vs-custom": {
                title: "Modular vs Custom-Built Kitchens: Pros & Cons",
                description: `
          **Modular Kitchens** (Pre-made, factory precision)  
          ✅ Quick installation, great finishing, easy maintenance, space-efficient.  
          ❌ Higher cost, limited customization, requires professional setup.  

          **Custom Kitchens** (Built on-site, carpenter-made)  
          ✅ Fully customizable, budget flexibility, durable if made well.  
          ❌ Time-consuming, inconsistent finish, harder to repair.  

          Many homeowners mix both—modular cabinets with custom wooden touches.
        `,
                imageUrl: "/images/modular-vs-custom.jpg",
            },
            "kitchen-lighting": {
                title: "Kitchen Lighting Guide",
                description: `
          **1. Task Lighting** – Focused light for cooking (under-cabinet LEDs, pendant lights).  
          **2. Ambient Lighting** – General brightness (ceiling LEDs, track lights).  
          **3. Accent Lighting** – Adds aesthetics (cabinet LEDs, cove lighting).  
          **4. Decorative Lighting** – Style-enhancing (chandeliers, vintage bulbs).  

          **Lighting Tips**:  
          ✅ Use layered lighting (mix ambient, task, and accent).  
          ✅ Pick correct bulb temperatures (4000K–5000K for prep areas, 2700K–3000K for ambiance).  
          ✅ Install dimmers for adjustable brightness.  

          A well-lit kitchen enhances functionality and aesthetics!
        `,
                imageUrl: "/images/kitchen-lighting.jpg",
            },
        },
    },

    {
        title: "Living Room Guide",
        slug: "living-room-guide",
        categories: [
            { id: "design-tips", title: "Living Room Design Tips" },
            { id: "furniture-arrangements", title: "Furniture Arrangements" },
            { id: "wall-decor", title: "Wall Decor Ideas" },
            { id: "lighting-guide", title: "Living Room Lighting Guide" },
        ],
        content: {
            "design-tips": {
                title: "Living Room Design Tips",
                description: `
          - **Plan Your Layout**: Arrange seating for conversations & TV viewing.  
          - **Choose the Right Colors**: Neutrals for space, earthy tones for warmth, bold colors for accents.  
          - **Select Comfortable Furniture**: Smart storage & functional seating.  
          - **Layer Your Lighting**: Use ambient, task, and accent lights.  
          - **Personal Touches**: Use artwork, books, and plants for character.  
          A well-balanced living room combines comfort with style.
        `,
                imageUrl: "/images/living-room-design.jpg",
            },
            "furniture-arrangements": {
                title: "Furniture Arrangements for Every Living Room Size",
                description: `
          Learn how to arrange furniture for small, medium, and large living rooms.  
          - **Symmetrical vs. Asymmetrical layouts**  
          - **Zoning techniques for open spaces**  
          - **Tips for making small rooms appear bigger**  
        `,
                imageUrl: "/images/furniture-arrangement.jpg",
            },
            "wall-decor": {
                title: "Wall Decor Ideas: Transform Your Living Space",
                description: `
          - **Gallery Walls**: Mix art, frames, and photos.  
          - **Wallpapers & Paint**: Add texture and depth.  
          - **Mirrors**: Create an illusion of space.  
          Enhance your living room with stylish wall decor ideas.
        `,
                imageUrl: "/images/living-room-wall-decor.jpg",
            },
            "lighting-guide": {
                title: "Living Room Lighting Guide",
                description: `
          - **Ambient Lighting**: General brightness (ceiling lights, track lights).  
          - **Task Lighting**: Reading lamps, table lights.  
          - **Accent Lighting**: Wall sconces, LED strips for mood lighting.  
          Create the perfect ambiance for relaxation and entertainment.
        `,
                imageUrl: "/images/living-room-lighting.jpg",
            },
        },
    },

    {
        title: "Bedroom Guide",
        slug: "bedroom-guide",
        categories: [
            { id: "bedroom-interiors", title: "Bedroom Interior Design Ideas" },
            { id: "space-saving", title: "Space-Saving Bedroom Furniture" },
            { id: "bedroom-colors", title: "Best Bedroom Color Schemes" },
            { id: "bedroom-lighting", title: "Bedroom Lighting Tips" },
        ],
        content: {
            "bedroom-interiors": {
                title: "Bedroom Interior Design Ideas",
                description: `
          - **Minimalist vs. Traditional designs**  
          - **Best furniture placement for space optimization**  
          - **Choosing the right decor & fabrics**  
        `,
                imageUrl: "/images/bedroom-design.jpg",
            },
            "space-saving": {
                title: "Space-Saving Bedroom Furniture",
                description: `
          - Foldable beds & wall-mounted desks  
          - Multi-functional storage furniture  
          - Smart organization techniques  
        `,
                imageUrl: "/images/bedroom-space-saving.jpg",
            },
        },
    },
]


export const data = [
      {
        "title": "The Ultimate Modular Kitchen Design Guide",
        "sections": [
          {
            "heading": "Introduction",
            "content": "A modular kitchen is the heart of a modern home, offering a stylish, space-efficient, and highly functional design. Whether you're renovating or building a new kitchen, this guide will walk you through everything—from layouts and materials to storage solutions and maintenance tips."
          },
          {
            "heading": "Choosing the Right Layout",
            "content": [
              {
                "subheading": "L-Shaped Kitchen",
                "details": "Perfect for small and medium spaces, maximizing efficiency."
              },
              {
                "subheading": "U-Shaped Kitchen",
                "details": "Provides ample storage and counter space for larger homes."
              },
              {
                "subheading": "Parallel Kitchen",
                "details": "Ideal for narrow spaces with two workstations facing each other."
              },
              {
                "subheading": "Island Kitchen",
                "details": "A luxury addition to open-plan homes, featuring a central counter."
              },
              {
                "subheading": "Straight Kitchen",
                "details": "Best for compact apartments, where all appliances align in one row."
              }
            ]
          },
          {
            "heading": "Selecting the Right Materials",
            "content": [
              {
                "subheading": "Cabinets",
                "details": "Plywood, MDF, and acrylic finishes provide durability and aesthetics."
              },
              {
                "subheading": "Countertops",
                "details": "Granite, quartz, and marble offer a luxurious feel with strong resistance to heat and stains."
              },
              {
                "subheading": "Backsplash",
                "details": "Ceramic tiles, glass, and stone backsplashes add style while protecting walls from spills."
              },
              {
                "subheading": "Flooring",
                "details": "Vinyl, tiles, and hardwood are excellent choices for modular kitchens, providing durability and easy maintenance."
              }
            ]
          },
          {
            "heading": "Smart Storage Solutions",
            "content": [
              {
                "subheading": "Pull-Out Cabinets",
                "details": "These allow easy access to stored utensils and ingredients."
              },
              {
                "subheading": "Corner Units",
                "details": "Utilize dead space with rotating or sliding corner cabinets."
              },
              {
                "subheading": "Vertical Storage",
                "details": "Use wall-mounted shelves and cabinets to make the most of vertical space."
              }
            ]
          },
          {
            "heading": "Lighting and Ventilation",
            "content": [
              {
                "subheading": "Under-Cabinet Lighting",
                "details": "Provides illumination for cooking and food preparation."
              },
              {
                "subheading": "Proper Ventilation",
                "details": "Install chimneys or exhaust fans to keep the air fresh and odor-free."
              }
            ]
          },
          {
            "heading": "Budget Planning",
            "content": "A modular kitchen can range from ₹1.5 lakh to ₹10 lakh depending on materials, layout, and additional features."
          },
          {
            "heading": "Conclusion",
            "content": "A well-designed modular kitchen enhances functionality and aesthetics. If you need professional assistance, contact us for a free consultation!"
          }
        ]
      },
      {
        "title": "The Ultimate Bedroom Interior Design Guide",
        "sections": [
          {
            "heading": "Introduction",
            "content": "Your bedroom is your personal sanctuary, and its design should reflect comfort, relaxation, and functionality. Whether you're redesigning your master bedroom or setting up a guest room, this guide will help you create the perfect ambiance."
          },
          {
            "heading": "Choosing the Right Bedroom Layout",
            "content": [
              {
                "subheading": "Minimalist Layout",
                "details": "A clutter-free space with essential furniture and neutral colors."
              },
              {
                "subheading": "Luxury Layout",
                "details": "Includes grand furniture, rich fabrics, and statement lighting."
              },
              {
                "subheading": "Small Space Layout",
                "details": "Maximizes functionality with built-in storage and multipurpose furniture."
              }
            ]
          },
          {
            "heading": "Choosing the Perfect Color Scheme",
            "content": [
              {
                "subheading": "Warm Tones",
                "details": "Shades like beige, warm grays, and earthy tones promote coziness."
              },
              {
                "subheading": "Cool Tones",
                "details": "Blues, greens, and lavenders create a calming effect."
              },
              {
                "subheading": "Neutral Palette",
                "details": "Whites, creams, and soft pastels provide a timeless and elegant look."
              }
            ]
          },
          {
            "heading": "Selecting the Right Furniture",
            "content": [
              {
                "subheading": "Bed Frames",
                "details": "Choose from platform beds, upholstered headboards, or wooden frames."
              },
              {
                "subheading": "Wardrobes",
                "details": "Sliding doors save space, while walk-in closets offer ample storage."
              },
              {
                "subheading": "Nightstands",
                "details": "Pair them with bedside lamps and organizers for convenience."
              }
            ]
          },
          {
            "heading": "Lighting and Ambience",
            "content": [
              {
                "subheading": "Ambient Lighting",
                "details": "Soft ceiling lights create a warm and relaxing atmosphere."
              },
              {
                "subheading": "Task Lighting",
                "details": "Bedside lamps and wall sconces provide focused lighting for reading."
              },
              {
                "subheading": "Accent Lighting",
                "details": "LED strips, fairy lights, or decorative pendant lights enhance aesthetics."
              }
            ]
          },
          {
            "heading": "Storage Solutions",
            "content": [
              {
                "subheading": "Under-Bed Storage",
                "details": "Utilize pull-out drawers or storage boxes beneath the bed."
              },
              {
                "subheading": "Wall-Mounted Shelves",
                "details": "Maximize vertical space for books and decorative pieces."
              }
            ]
          },
          {
            "heading": "Final Touches: Decor and Accessories",
            "content": [
              {
                "subheading": "Rugs & Carpets",
                "details": "Add warmth and texture with soft, plush rugs."
              },
              {
                "subheading": "Wall Art & Mirrors",
                "details": "Use artwork and mirrors to enhance the room’s aesthetics."
              },
              {
                "subheading": "Plants & Greenery",
                "details": "Incorporate indoor plants for a fresh and inviting ambiance."
              }
            ]
          },
          {
            "heading": "Conclusion",
            "content": "Designing the perfect bedroom requires balancing comfort, style, and functionality. For a customized bedroom interior design, reach out to our team for expert guidance."
          }
        ]
      }
    ]
  