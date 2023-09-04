import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

export default function Post() {
    return <div>
      <h1>posting ID page</h1>
    </div>;
  }
  

  export const getServerSideProps = withPageAuthRequired(() => {
    return {
      props: {
        test: 'this is a test',
      },
    };
  });