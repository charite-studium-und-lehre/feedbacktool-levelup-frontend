import './App.css'

const colors = {
    progress: {
        base: '#63940f',
        lighter2: '#cdd6b6',
        darker0: '#8C9A74',
        darker1: '#718158',
        darker2: '#515E3B',
        darker3: '#465927',
        darker4: '#3B5118'
    },

    ptm: {
        base: '#2299a5',
        lighter1: '#b7c5cc',
        darker0: '#4e6468',
        darker1: '#3b5357',
        darker2: '#27303f',
        darker3: '#1a393c',
        darker4: '#103136'
    },

    mc: {
        lighter3: '#D0847A',
        lighter1: '#e6cec3',
        base: '#ab795c',
        darker0: '#734c36'
    },

    pp: {
        base: '#9b589b',
        lighter2: '#cca3cc',
        lighter1: '#e6e1e6',
        darker0: '#6D516D',
        darker1: '#5B3E5B',
        darker2: '#422A42',
        darker3: '#3F1C3F',
        darker4: '#391139'
    },

    background: {
        base: 'var(--color-background-base)',
        grey6: 'var(--color-background-grey6)',
        grey5: '#9AA5B4',
        grey4: '#A7B3C3',
        grey3: '#B6BDC7',
        grey2: '#BFC6D1',
        grey1: '#CFD8E4',
        grey0: '#e4e9f0',
        buttonGrey: '#6c757d'
    },

    textBlack: '#101010',

    default: '#ff0000',

    graphs: {
        correct:"hsla(120, 50%, 50%, .4)",
        wrong:"hsla(0, 50%, 50%, .4)"
    }
}

colors.graphs.missingAnswer = colors.graphs.default
colors.graphs.total = colors.background.grey1

export default colors