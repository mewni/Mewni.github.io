module.exports = {
    title: 'Mewni Blog haha er',
    description: 'nana',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/'},
            { text: 'About me', link:'#'}
        ],
        sidebar: {
             '/guide/': [
                 '',
                 'linux',
                 'windows'
             ]
        },
        smoothScroll: true
    }
}