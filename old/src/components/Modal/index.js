import React, { useState, useEffect } from "react"
import styles from "./modal.module.css"
import PropTypes from "prop-types"

const Modal = ({ title, children, onClose }) => {
  const [isClosing, setIsClosing] = useState(false)

  const closeModal = () => {
    setIsClosing(true)
    setTimeout(() => {
      document.body.classList.remove("noScroll")
      onClose()
    }, 300)
  }

  const setNoScroll = () => {
    document.body.classList.add("noScroll")
  }

  useEffect(() => {
    setNoScroll()
  }, [])

  return (
    <div
      className={`${styles.wrapper} ${isClosing ? styles.wrapperClosing : ""}`}
      onClick={closeModal}
    >
      <div className={`${styles.modal} p-6`}>
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <div>{children}</div>
      </div>
      <div className={styles.overlay} />
    </div>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal
