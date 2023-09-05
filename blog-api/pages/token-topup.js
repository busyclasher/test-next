import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../Components/AppLayout/AppLayout/AppLayout";

export default function TokenTopup() {
    return ( 
    <div>
      <h1>token toping up</h1>
    </div>);
  }
  
  TokenTopup.getLayout = function getLayout(page, pageProps){
    return <AppLayout {...pageProps}>{page}</AppLayout>;
  };

  export const getServerSideProps = withPageAuthRequired(() => {
    return {
      props: {},
    };
  });