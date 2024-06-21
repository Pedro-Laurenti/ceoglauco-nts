import '@styles/globals.css'
import Head from 'next/head'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>CEO GLAUCO</title>

                <meta property="og:msapplication-TileImage" content="https://www.ceoglauco.com/logo.webp" />
                <meta property="msapplication-TileImage" content="https://www.ceoglauco.com/logo.webp" />
                <meta name="og:msapplication-TileImage" content="https://www.ceoglauco.com/logo.webp" />
                <meta name="msapplication-TileImage" content="https://www.ceoglauco.com/logo.webp" />

                <meta property="og:site_name" content="Teste Perfil Empresarial | CEO Glauco" />
                <meta property="site_name" content="Teste Perfil Empresarial | CEO Glauco" />
                <meta name="og:site_name" content="Teste Perfil Empresarial | CEO Glauco" />
                <meta name="site_name" content="Teste Perfil Empresarial | CEO Glauco" />

                <meta property="og:title" content="Teste Perfil Empresarial | CEO Glauco" />
                <meta property="title" content="Teste Perfil Empresarial | CEO Glauco" />
                <meta name="og:title" content="Teste Perfil Empresarial | CEO Glauco" />
                <meta name="title" content="Teste Perfil Empresarial | CEO Glauco" />

                <meta property="og:type" content="website" />
                <meta property="type" content="website" />
                <meta name="og:type" content="website" />
                <meta name="type" content="website" />

                <meta property="og:description" content="Quiz para definição de perfil profissional" />
                <meta property='description' content='Quiz para definição de perfil profissional.' />
                <meta name='og:description' content='Quiz para definição de perfil profissional.' />
                <meta name='description' content='Quiz para definição de perfil profissional.' />

                <meta property='og:subject' content='Teste Perfil Empresarial | CEO Glauco' />
                <meta property='subject' content='Teste Perfil Empresarial | CEO Glauco' />
                <meta name='og:subject' content='Teste Perfil Empresarial | CEO Glauco' />
                <meta name='subject' content='Teste Perfil Empresarial | CEO Glauco' />

                <meta property="og:image:secure_url" itemProp="image" content="https://www.ceoglauco.com/logo.webp" />
                <meta property="image:secure_url" itemProp="image" content="https://www.ceoglauco.com/logo.webp" />
                <meta name="og:image:secure_url" itemProp="image" content="https://www.ceoglauco.com/logo.webp" />
                <meta name="image:secure_url" itemProp="image" content="https://www.ceoglauco.com/logo.webp" />

                <meta property="og:image" itemProp="image" content="https://www.ceoglauco.com/logo.webp" />
                <meta property="og:image" itemProp="image" content="http://ceoglauco.com/logo.webp" />
                <meta property="image" itemProp="image" content="https://www.ceoglauco.com/logo.webp" />
                <meta property="image" itemProp="image" content="http://ceoglauco.com/logo.webp" />
                <meta name="og:image" itemProp="image" content="https://www.ceoglauco.com/logo.webp" />
                <meta name="og:image" itemProp="image" content="http://ceoglauco.com/logo.webp" />
                <meta name="image" itemProp="image" content="https://www.ceoglauco.com/logo.webp" />
                <meta name="image" itemProp="image" content="http://ceoglauco.com/logo.webp" />

                <link rel="icon" href="/public/Logo.ico" />
                <link rel='favicon' href="/public/Logo.ico" />
                <link rel="shortcut icon" href="/public/Logo.ico" />
            </Head>
            <Component {...pageProps}/>
        </>
    )
}

export default MyApp