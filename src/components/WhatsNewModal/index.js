import React from "react"
import Modal from "@/components/Modal"
import PropTypes from "prop-types"

const WhatsNewModal = ({ toggleWhatsNew, showWhatsNewModal }) => {
  return (
    <Modal
      onClose={toggleWhatsNew}
      title="What's new?"
      isOpen={showWhatsNewModal}
    >
      <h2 className="text-lg font-bold mt-5 mb-1">v3.1.0</h2>
      <ul>
        <li>More icons have been added to the set.</li>
        <li>You can now download the icons Sketch file.</li>
      </ul>
      <h2 className="text-lg font-bold mt-5 mb-1">v3.0.0</h2>
      <ul>
        <li>Support for font and JS has been dropped to focus on SVGs only.</li>
        <li>
          The website has been fully rewritten and redesigned. Now, hovering an
          icon gives you the choice to either download it or copy the source.
        </li>
      </ul>
      <h2 className="text-lg font-bold mt-5 mb-1">What's next</h2>
      <ul>
        <li>Some icons will be redesigned and new ones will be added.</li>
        <li>Sketch file will be added as a download element.</li>
        <li>
          And more{" "}
          <span role="img" aria-label="smile icon">
            🙂
          </span>
        </li>
      </ul>
      <h2 className="text-lg font-bold mt-5 mb-1">What about v2.0.0?</h2>
      <ul>
        <li>
          Support has been dropped, but icons are still accessible here:{" "}
          <a
            href="https://v2.jam-icons.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 text-gray-600 font-semibold transition-all duration-300"
          >
            https://v2.jam-icons.com
          </a>
        </li>
      </ul>
    </Modal>
  )
}

WhatsNewModal.propTypes = {
  showWhatsNewModal: PropTypes.bool.isRequired,
  toggleWhatsNew: PropTypes.func.isRequired,
}

export default WhatsNewModal
