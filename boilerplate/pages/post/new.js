import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../Components/AppLayout/AppLayout";

export default function NewPost(props) {

  console.log('NEW POST PROPS')

    return ( <div>
      <h1>new post page</h1>
    </div>
    );
  }
  
NewPost.getLayout = function getLayout(page, pageProps){
    return <AppLayout {...pageProps}>{page}</AppLayout>;
  };

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {
      test: 'this is a test',
    },
  };
});