import React from "react"
import Styles from "./Drawer.module.scss"

import NavLinks from "../NavLinks"
import Backdrop from "../../UI/Backdrop/Backdrop"

export default (props) => (
  <div className={Styles.DrawerSection}>
    <Backdrop />
    <div className={Styles.Drawer}>
      <button title="Close Drawer" onClick={props.CloseDrawerBtnClicked}>
        X
      </button>
      <NavLinks ActiveClassName={Styles.ActiveLink} />
    </div>
  </div>
)
