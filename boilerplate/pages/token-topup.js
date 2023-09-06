import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../Components/AppLayout/AppLayout";

export default function TokenTopup(props) {

  console.log('NEW POST PROPS')

    return ( <div>
      <h1>random id generator</h1>
    </div>
    );
  }
  
TokenTopup.getLayout = function getLayout(page, pageProps){
    return <AppLayout {...pageProps}>{page}</AppLayout>;
  };

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {
      test: 'this is a test',
    },
  };
});