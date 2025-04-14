"use client"

import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import styles from "./Home.module.css"

export default function Home() {
  const [showFaq, setShowFaq] = useState(false)

  const faqItems = [
    {
      question: "What is DurJam?",
      answer:
        "DurJam is DU Computing Society's Game Jam & Durham's Society for Game Development. We organize game jams and provide resources for game developers in Durham.",
    },
    {
      question: "Who can participate in DurJam events?",
      answer:
        "Anyone interested in game development can participate! Whether you're a beginner or experienced developer, artist, musician, or writer - all are welcome.",
    },
    {
      question: "Do I need prior game development experience?",
      answer:
        "No prior experience is necessary! We provide resources like our JamPacks tutorials to help beginners get started. Game jams are a great way to learn game development.",
    },
    {
      question: "What should I bring to a game jam?",
      answer:
        "Bring your computer, charger, and any peripherals you need. We recommend installing game development software beforehand, but we'll provide guidance on tools and resources.",
    },
    {
      question: "How can I stay updated about upcoming events?",
      answer:
        "Follow us on Instagram and LinkedIn, and register your interest through our form to receive updates about upcoming events and workshops.",
    },
  ]

  const toggleFaq = () => {
    setShowFaq(!showFaq)

    if (!showFaq) {
      setTimeout(() => {
        document.getElementById("faq-section")?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

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
          <a href="https://forms.gle/FiR6rnLjmFw562MPA" className={styles.buttonLink}>
            Register your Interest to Participate!
          </a>
          <h2 className="text-3xl font-semibold text-center my-5">Learn more about DurJam</h2>
          <a
            href="https://subdued-lupin-877.notion.site/DurJam-JamPacks-15c9eeb1fa3680fea32ecc7c0e8c70c2"
            className={styles.buttonLink}
          >
            Check out JamPacks, our Game Development Tutorials
          </a>
          <a href="https://durjam.devpost.com/project-gallery" className={styles.buttonLink}>
            Check out the Games from DurJam 2020
          </a>
          <button
            type="button"
            onClick={toggleFaq}
            className={styles.buttonLink}
            style={{ border: "none", cursor: "pointer" }}
          >
            {showFaq ? "Hide FAQ" : "Frequently Asked Questions"}
          </button>
        </div>

        {/* FAQ Section */}
        {showFaq && (
          <div id="faq-section" className="mx-auto max-w-3xl mt-12">
            <h2 className="text-3xl font-semibold text-center text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqItems.map((item) => (
                <div key={item.question} className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-medium text-white mb-3">{item.question}</h3>
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={toggleFaq}
                className={styles.buttonLink}
                style={{ border: "none", cursor: "pointer" }}
              >
                Hide FAQ Section
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
