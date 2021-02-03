import styled from "styled-components"
import React from "react"

const Container = styled.div`
  background-color: var(--color1);
  color: var(--color3);
  padding: 20px;
  border-radius: 5px;
  border: 1px solid var(--color2);
  h1 {
    font-weight: bold;
    margin: 0;
    font-size: 18px;
    display: block;
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;
    &::after {
      content: "";
      height: 1px;
      background-color: var(--color5);
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      margin-top: 13px;
      margin-left: 100px;
    }
  }
  p {
    margin: 0;
  }
`

export default function Not5YearOldLiterallyNote() {
  return (
    <Container>
      <h1>Welcome</h1>
      <p>
        We do not expect an actual 5 year old on this platform. The term
        "WebFor5" connotes simplicity in our articles. We ensure that our
        articles on various web development topics are easy to understand and
        digest 😊
      </p>
    </Container>
  )
}
