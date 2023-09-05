import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import {DM_Sans, Poppins } from '@next/font/google';

const DMSans = DM_Sans({
  weight: ['400','500', '700'],
  subsets: ['latin'],
  variable: "--font-dm-sans"
});

const poppins = Poppins({
  weight: ['400','500', '700'],
  subsets: ['latin'],
  variable: "--font-poppins"
});

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);

  return( <UserProvider>
    <main className={`${DMSans.variable} ${poppins.variable}`}>
    {getLayout(<Component {...pageProps} />, pageProps)}
    </main>
    </UserProvider>
  );
}

export default MyApp
