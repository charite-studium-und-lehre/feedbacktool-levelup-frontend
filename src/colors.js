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
    epas: {
        done: {
            value: '#224768',
            background: '#c9d1da'
        },
        confident: {
            value: '#096C7B',
            background: '#c3dbdf'
        },
        externalAssessment: {
            value: '#802000',
            background: '#e0c8c0'
        }
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
        grey6: 'var(--color-background-button)',
        grey7: '#838c99',
        grey5: '#8e98a6',
        grey4: '#A7B3C3',
        grey3: '#B6BDC7',
        grey2: 'var(--color-background-grey2)',
        grey1: '#CFD8E4',
        grey0: '#e4e9f0',
        buttonGrey: '#6c757d',
        lightgrey : 'lightgrey',
        buttonBlue:'#2375BB'
    },
    
    textBlack: '#101010',
    white: '#ffffff',
    smiley: 'rgb(27, 148, 167)',
    default: '#ff0000',
    blackOpacity05:'rgba(0, 0, 0, 0.5)',

    graphs: {
        correct: 'var(--color-graphs-correct)',
        wrong: 'var(--color-graphs-wrong)',
        missingAnswer: 'var(--color-graphs-missing-answer)',
        total: 'var(--color-graphs-total)'
    }
}

export default colors