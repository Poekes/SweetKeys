const { default: plugin } = require("@sveltejs/adapter-auto");

module.exports = {
    content: [
        "./src*.{html,js,svelte}",
    ],
    theme: {
        extend: {}
    },
    plugins: {

    },
    safelist: [
        'bg-blue-100',
        'hover:bg-blue-200',
        'text-blue-700',

        'bg-pink-100',
        'hover:bg-pink-200',
        'text-pink-700',

        'bg-green-100',
        'hover:bg-green-200',
        'text-green-700',
    ]

}