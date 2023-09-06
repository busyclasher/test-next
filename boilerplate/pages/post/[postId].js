import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../Components/AppLayout/AppLayout";

export default function PostID(props) {

  console.log('NEW POST PROPS')

    return ( <div>
      <h1>random id generator</h1>
    </div>
    );
  }
  
PostID.getLayout = function getLayout(page, pageProps){
    return <AppLayout {...pageProps}>{page}</AppLayout>;
  };

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {
      test: 'this is a test',
    },
  };
});