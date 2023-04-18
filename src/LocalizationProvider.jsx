import React, { Children, useEffect } from 'react'
import PropTypes from 'prop-types'
import { LocalizationProvider } from '@fluent/react'
import { connect } from 'react-redux'
import 'intl-pluralrules'
import { changeLocales } from './reducers/LocalizationReducer'

const AppLocalizationProvider = ({ bundles, children, changeLocales }) => {
  useEffect(() => {
    changeLocales(navigator.languages)
  }, [changeLocales])

  if (!bundles) {
    return <div />
  }
  return (
    <>
      <LocalizationProvider l10n={bundles}>
        {Children.only(children)}
      </LocalizationProvider>
    </>
  )
}

AppLocalizationProvider.propTypes = {
  bundles: PropTypes.any,
  children: PropTypes.any,
  changeLocales: PropTypes.func
}

const mapStateToProps = (state) => ({ bundles: state.localization.bundles })
const mapDispatchToProps = { changeLocales }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLocalizationProvider)
