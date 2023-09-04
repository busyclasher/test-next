import Link from 'next/link'; 
import {useUser} from '@auth0/nextjs-auth0/client';
import Image from 'next/image';

export default function Home() {
  const {user} = useUser();

  console.log("user:" , user);

  return <div>
    <h1>first next js app</h1>
    <div>
    
    </div>
  </div>;
}
