import React, { Fragment } from 'react'
import FooterTemplate from './FooterTemplate.js/FooterTemplate'
import HeaderTemplate from './HeaderTemplate/HeaderTemplate'

export default function ({children}) {
  return (
    <Fragment>
            <HeaderTemplate />
            <div>{children}</div>
            <FooterTemplate />
        </Fragment>
  )
}
