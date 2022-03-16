const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports =
plugin( function({ addComponents, theme }) {

    const beforeStyles = Object.assign(
        {
            content: 'attr(data-head)',
            float: 'left',
        },
        theme('tableHelper.heading', {}),
    );

    addComponents({
        '.table-stripped-odd': {
            'tbody tr:nth-child(odd)': {
                backgroundColor: theme('tableHelper.rows.odd', colors.gray[100])
            }
        },
        '.table-stripped-even': {
            'tbody tr:nth-child(even)': {
                backgroundColor: theme('tableHelper.rows.even', colors.gray[100])
            }
        },
        '.table-not-stripped': {
            'tbody tr:nth-child(n)': {
                backgroundColor: theme(`tableHelper.rows.DEFAULT`, 'inherit')
            }
        },
        '.table-sticky': {
            'thead': {
                'position': 'sticky',
                'top': 0,
            }
        },
        '.table-not-sticky': {
            'thead': {
                'position': 'relative',
            }
        },
        '.table-scrollable': {
            'display': 'block',
            'overflow-x': 'auto'
        },
        '.table-not-scrollable': {
            'display': 'table',
            'overflow-x': 'initial'
        },
        '.table-responsive': {
            'thead': {
                display: 'none',
            },
            'tr': {
                display: 'block',
            },

            'tr td': {
                display: 'block',
            },

            'tr td::before': beforeStyles,
        },
        '.table-not-responsive': {
            'thead': {
                display: 'table-header-group',
            },
            'tr': {
                display: 'table-row',
            },

            'tr td': {
                display: 'table-cell',
                'text-align': 'left',
            },

            'tr td::before': {
                'display': 'none',
            }
        }
    })
})


