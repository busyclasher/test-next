import Image from 'next/image';
import Link from 'next/link';

export const AppLayout = ({children}) => {
    return (  
        <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
            <div className="flex flex-col text-white overflow-hidden bg-pink-400">
                <div>

                <div>logo</div>
                <div>cta button</div>
                <div>tokens</div>

                </div>
                <div className="flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800">
                    list of posts 
                </div>
                <div class="bg-cyan-800">
                {!!user ?
                    <>
                <div>
                 <Image 
                src={user.picture}
                alt={user.name} 
                height={50} width={50} />
                </div>
                {user.email}
                <Link href="/api/auth/logout">Logout</Link>
                </>: (
                <Link href="/api/auth/login">Login</Link>
                    )}
                </div>
            </div>
             <div className="bg-yellow-400">{children}</div>
            </div>
    );
};
 