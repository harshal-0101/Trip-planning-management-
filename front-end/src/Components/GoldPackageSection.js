import { ArrowRight } from "lucide-react"
import "./components.css"

const packages = [
  {
    title: "Luxury Stays",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5c1Iu1yYM4W9VwESTwujNcm4uy9maW.png",
  },
  {
    title: "Mountain Escape",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5c1Iu1yYM4W9VwESTwujNcm4uy9maW.png",
  },
  {
    title: "Ocean Paradise",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5c1Iu1yYM4W9VwESTwujNcm4uy9maW.png",
  },
  {
    title: "Alpine Adventure",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5c1Iu1yYM4W9VwESTwujNcm4uy9maW.png",
  },
  {
    title: "Road Trips",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5c1Iu1yYM4W9VwESTwujNcm4uy9maW.png",
  },
  {
    title: "Forest Retreat",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5c1Iu1yYM4W9VwESTwujNcm4uy9maW.png",
  },
  {
    title: "City Lights",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5c1Iu1yYM4W9VwESTwujNcm4uy9maW.png",
  },
  {
    title: "Island Getaway",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5c1Iu1yYM4W9VwESTwujNcm4uy9maW.png",
  },
  {
    title: "Snow Peaks",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5c1Iu1yYM4W9VwESTwujNcm4uy9maW.png",
  },
  {
    title: "Valley Views",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5c1Iu1yYM4W9VwESTwujNcm4uy9maW.png",
  },
]

function GoldPackageSection() {
  return (
    <section className="gold-package-section">
      <div className="container">
        <h2 className="section-title">
          <span className="highlight">Gold</span> Offer On Package
        </h2>

        <div className="package-grid">
          {packages.map((pkg, index) => (
            <div key={index} className="package-card">
              <div className="image-container">
                <img src={pkg.imageUrl || "/placeholder.svg"} alt={pkg.title} className="package-image" />
                <div className="overlay" />
              </div>
              <div className="content">
                <h3 className="package-title">{pkg.title}</h3>
                <p className="package-description">{pkg.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="button-container">
          <button className="view-all-button">
            View All
            <ArrowRight className="arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default GoldPackageSection

