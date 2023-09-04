import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

export default function TokenTopup() {
    return <div>
      <h1>token toping up</h1>
    </div>;
  }
  

  export const getServerSideProps = withPageAuthRequired(() => {
    return {
      props: {
        test: 'this is a test',
      },
    };
  });