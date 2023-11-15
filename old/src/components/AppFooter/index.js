import React from "react"
import styles from "./app-footer.module.css"

const AppFooter = () => {
  return (
    <>
      <footer className="pt-12 pb-16 text-center container mx-auto px-4 text-gray-500 font-semibold">
        <small className="text-xs">
          Made with <span className={styles.heartbeat}>♥</span> by{" "}
          <a
            href="https://michaelamprimo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-colors duration-300"
          >
            @michaelampr
          </a>
        </small>
      </footer>
    </>
  )
}

export default AppFooter
