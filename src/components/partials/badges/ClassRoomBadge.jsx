import React from "react"
import styles from "./ClassRoomBadge.module.scss"
import PropTypes from "prop-types"
import className from "classnames"

const ClassRoomBadge = ({ text }) => (
  <div className={className(styles.classRoomBadge)}>{text}</div>
)

ClassRoomBadge.propTypes = {
  text: PropTypes.string.isRequired
}

export default ClassRoomBadge
