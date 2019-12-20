import React from 'react'
import Styles from './Theme.module.scss';


import { ThemeToggler } from 'gatsby-plugin-dark-mode'

export default class Theme extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          // <label>
          //   <input
          //     type="checkbox"
          //     onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          //     checked={theme === 'dark'}
          //   />{' '}
          //   Dark mode
          // </label>
          <div className={Styles.toggle}>
            {/* <input 
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
              type="checkbox" 
            /> */}
              <input
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                type="checkbox"
                id="toggle"
                checked={theme === 'light' ? false : true}
              />
              <label htmlFor="toggle"></label>
            {/* <label for="toggle"></label> */}
          </div>
        )}
      </ThemeToggler>
    )
  }
}