import React, { useContext } from "react"
import { ThemeContext } from "gatsby-plugin-theme-switcher"

const myThemes = [
  {
    id: "dark",
    name: "Dark",
  },
  {
    id: "light",
    name: "Light",
  },
]

const ThemePicker = () => {
  const { theme, switchTheme } = useContext(ThemeContext)

  return (
    <>
      {myThemes.map((item, index) => {
        const nextTheme = myThemes[index].id

        return (
          <div key={item.id} className={item.id}>
            <button
              aria-label={`Theme ${item.name}`}
              onClick={() => switchTheme(nextTheme)}
            >
              {item.name}
            </button>
          </div>
        )
      })}
    </>
  )
}

export default ThemePicker
