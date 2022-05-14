import Head from "next/head"

const Meta = ({ keywords, description, title }) => {
    return (
        <Head>
            <meta charset="UTF-8" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'bFLIX',
    keywords: 'movie app, free movies, popular movies',
    description: 'watch movies for free'
}

export default Meta;