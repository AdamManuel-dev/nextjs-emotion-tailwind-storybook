module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      'dark',
      'bumblebee',
      'emerald',
      'synthwave',
      'forest',
      'dracula',
      'cmyk',
      'lemonade',
      {
        wordle: {
          'primary': '#e76f51',
          'primary-focus': '#f3b5a5',
          'primary-content': '#201047',

          'secondary': '#54c5f2',
          'secondary-focus': '#88d7f7',
          'secondary-content': '#201047',

          'accent': '#f4a261',
          'accent-focus': '#f3c68c',
          'accent-content': '#201047',

          'neutral': '#20134e',
          'neutral-focus': '#140a2e',
          'neutral-content': '#f9f7fd',

          'base-100': '#2c1a65',
          'base-200': '#20134e',
          'base-300': '#140a2e',
          'base-content': '#f9f7fd',

          'info': '#9fcadf',
          'success': '#71ead2',
          'warning': '#f3cc30',
          'error': '#e13d53',

          '--rounded-box': '1.5rem',
          '--rounded-btn': '0.75rem',
          '--rounded-badge': '2rem',

          '--animation-btn': '0.25s',
          '--animation-input': '0.25s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '0.75rem',
          '--border-btn': '0.25rem',
        },
      },
      {
        wordletwo: {
          corporate: {
            'primary': '#2a9d8f',
            'primary-focus': '#34c5b5',
            'primary-content': '#eaf0f6',

            'secondary': '#e76f51',
            'secondary-focus': '#ed937d',
            'secondary-content': '#fcece9',

            'accent': '#ce6a85',
            'accent-focus': '#e7b6c3',
            'accent-content': '#f9ecef',

            'neutral': '#e1b137',
            'neutral-focus': '#e8c264',
            'neutral-content': '#fcf6e9',

            'base-100': '#203b46',
            'base-200': '#38687a',
            'base-300': '#62a0b7',
            'base-content': '#cbdfe7',

            'info': '#87c5f8',
            'success': '#00fae1',
            'warning': '#ffc266',
            'error': '#ffa58a',

            '--rounded-box': '1rem',
            '--rounded-btn': '0.5rem',
            '--rounded-badge': '1.9rem',

            '--animation-btn': '0.2s',
            '--animation-input': '0.2s',

            '--btn-text-case': 'uppercase',
            '--navbar-padding': '0.5rem',
            '--border-btn': '0.1rem',
          },
        },
      },
      {
        // Extends the synthwave theme and names it darkwordle
        darkwordle: {
          ...require('daisyui/src/colors/themes')['[data-theme=synthwave]'],
          'primary': 'blue',
          'primary-focus': 'mediumblue',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: 'dark',
  },
}
