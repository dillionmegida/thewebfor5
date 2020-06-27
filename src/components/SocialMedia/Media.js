import React from "react"
import { Twitter, Web } from "../UI/Icons"

const TwitterMedia = (props) => (
  <a href={props.href} title={props.title}>
    <Twitter />
  </a>
)

const WebsiteMedia = (props) => (
  <a href={props.href} title={props.title}>
    <Web />
  </a>
)

export { TwitterMedia, WebsiteMedia }
