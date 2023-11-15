import React, { useState } from "react"
import AppLogo from "@/components/AppLogo"
import DownloadModal from "@/components/DownloadModal"
import WhatsNewModal from "../WhatsNewModal"

const AppHeader = () => {
  const [showWhatsNewModal, setShowWhatsNewModal] = useState(false)
  const [showDlModal, setShowDlModal] = useState(false)

  const toggleWhatsNew = event => {
    event && event.preventDefault()
    setShowWhatsNewModal(!showWhatsNewModal)
  }

  const toggleDownload = event => {
    event && event.preventDefault()
    setShowDlModal(!showDlModal)
  }

  return (
    <>
      <header className="mx-auto container px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
        <section>
          <AppLogo />
        </section>
        <nav className="flex">
          <a
            href=""
            onClick={toggleWhatsNew}
            className="font-medium hover:text-yellow-500 transition-colors duration-300"
          >
            What's new?
          </a>
          <a
            href=""
            onClick={toggleDownload}
            className="mx-8 font-medium hover:text-yellow-500 transition-colors duration-300"
          >
            Download
          </a>
          <a
            href="https://github.com/michaelampr/jam"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-yellow-500 transition-colors duration-300"
          >
            GitHub
          </a>
        </nav>
      </header>
      {showWhatsNewModal && (
        <WhatsNewModal
          showWhatsNewModal={showWhatsNewModal}
          toggleWhatsNew={toggleWhatsNew}
        />
      )}
      {showDlModal && (
        <DownloadModal
          showDlModal={showDlModal}
          toggleDownload={toggleDownload}
        />
      )}
    </>
  )
}

export default AppHeader
