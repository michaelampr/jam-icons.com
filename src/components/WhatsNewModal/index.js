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
      <h2 className="text-lg font-bold mt-5 mb-1">v3.0.0</h2>
      <ul>
        <li>
          Support for font icons and JS approach have been dropped altogether to
          focus on SVGs only.
        </li>
        <li>
          The website has been fully rewritten and redesigned. Now, hovering an
          icon gives you the choice to either download it or copy the source.
        </li>
      </ul>
      <h2 className="text-lg font-bold mt-5 mb-1">What's next</h2>
      <ul>
        <li>Some icons will be redesigned and new ones will be added.</li>
        <li>Sketch file will be added as a download element.</li>
        <li>And more 🙂</li>
      </ul>
      <h2 className="text-lg font-bold mt-5 mb-1">What about v2.0.0?</h2>
      <ul>
        <li>Support has been dropped, but icons are still accessible here: </li>
      </ul>
    </Modal>
  )
}

WhatsNewModal.propTypes = {
  showWhatsNewModal: PropTypes.bool.isRequired,
  toggleWhatsNew: PropTypes.func.isRequired,
}

export default WhatsNewModal
