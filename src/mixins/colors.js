const contrast = {
  methods: {
    hoverColor(color) {
      const contrast = this.getContrast(color)

      let colorClass = 'hover:bg-complementary hover:text-primary hover:border-complementary'

      if (color) {
        if (contrast === 'light') {
          colorClass = 'hover:bg-light hover:text-dark hover:border-light'
        } else if (contrast === 'dark') {
          colorClass = 'hover:bg-dark hover:text-light hover:border-dark'
        }
      }

      return colorClass
    },
    bgColor(color) {
      if (color) {
        return 'background-color:' + color + ';'
      }
    },
    fgColor(color) {
      const contrast = this.getContrast(color)
      let colorClass = 'text-complementary'

      if (color) {
        if (contrast === 'light') {
          colorClass = 'text-light'
        } else if (contrast === 'dark') {
          colorClass = 'text-dark'
        }
      } else {
        if (this.$store.state.theme === 'light-mode') {
          colorClass = 'text-dark'
        } else {
          colorClass = 'text-light'
        }
      }

      return colorClass
    },
    getContrast(hexcolor, type = 'text') {
      if (hexcolor === undefined) {
        hexcolor = '#FFFFFF'
      }
      if (hexcolor.slice(0, 1) === '#') {
        hexcolor = hexcolor.slice(1)
      }

      if (hexcolor.length === 3) {
        hexcolor = hexcolor
          .split('')
          .map(function(hex) {
            return hex + hex
          })
          .join('')
      }

      const r = parseInt(hexcolor.substr(0, 2), 16)
      const g = parseInt(hexcolor.substr(2, 2), 16)
      const b = parseInt(hexcolor.substr(4, 2), 16)

      const yiq = (r * 299 + g * 587 + b * 114) / 1000

      if (hexcolor = '') {
        return
      }

      return yiq >= 128 ? 'dark' : 'light'
    }
  }
}

export default contrast
