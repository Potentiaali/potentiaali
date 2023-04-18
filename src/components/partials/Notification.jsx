import React from 'react'
import propTypes from 'prop-types'
import styles from './Notification.module.scss'
import classNames from 'classnames'

const Notification = ({ type = 'info', title, children }) => (
  <div
    className={classNames(styles.notification, styles[`${type}-notification`])}
  >
    {title !== undefined && (
      <div className={styles.notificationTitle}>{title}</div>
    )}
    <div className={styles.notificationContents}>{children}</div>
  </div>
)

Notification.propTypes = {
  type: propTypes.string,
  children: propTypes.any.isRequired,
  title: propTypes.any.isRequired
}

export default Notification
