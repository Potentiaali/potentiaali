import React from "react"
import styles from "./AreaBadge.module.scss"
import PropTypes from "prop-types"
import className from "classnames"
import useTranslation from "next-translate/useTranslation"

const AreaBadge = ({ area }) => (
  <div
    className={className(
      {
        [styles.a]: area === "A",
        [styles.b]: area === "B",
        [styles.c]: area === "C"
      },
      styles.areabadge
    )}
  >
    <Localized id="area">Alue</Localized> {area}
  </div>
)

AreaBadge.propTypes = {
  area: PropTypes.string.isRequired
}

export default AreaBadge
