import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <span className="flex flex-row gap-5 justify-center my-5">
            <img
              src="/durjam_logo_transparent.png"
              alt="DurJam logo: a cathedral-shaped video game controller."
              className="w-20"
            />
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">DurJam</h1>
          </span>
          <p className="text-center my-5 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            DU Computing Society's Game Jam & Durham's Society for Game Development!
          </p>
        </div>
        <div className="mx-auto max-w-2xl flex flex-row gap-10 justify-center my-5">
          <a href="https://instagram.com/durjamevent">
            <FontAwesomeIcon icon={faInstagram} className="text-6xl" />
          </a>
          <a href="https://www.linkedin.com/company/durjam">
            <FontAwesomeIcon icon={faLinkedin} className="text-6xl" />
          </a>
          <a href="mailto:oscar.r@durjam.co.uk">
            <FontAwesomeIcon icon={faEnvelope} className="text-6xl" />
          </a>
        </div>
        <div className="mx-auto mt-5 max-w-2xl flex flex-col">
          <a
            href="https://forms.gle/FiR6rnLjmFw562MPA"
            className="my-5 block text-center mx-auto px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700"
          >
            Register your Interest to Participate!
          </a>
          <h2 className="text-3xl font-semibold text-center my-5">Learn more about DurJam</h2>
          <a
            href="https://subdued-lupin-877.notion.site/DurJam-JamPacks-15c9eeb1fa3680fea32ecc7c0e8c70c2"
            className="my-2 block text-center mx-auto px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700"
          >
            Check out JamPacks, our Game Development Tutorials
          </a>
          <a
            href="https://durjam.devpost.com/project-gallery"
            className="my-2 block text-center mx-auto px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700"
          >
            Check out the Games from DurJam 2020
          </a>
        </div>
      </div>
    </div>
  )
}
