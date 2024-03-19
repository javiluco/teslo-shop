import NextAuth, { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import prisma from './lib/prisma';
import bcryptjs from 'bcryptjs';

export const authConfig: NextAuthConfig = {
    pages: {
      signIn: '/auth/login',
      newUser: '/auth/new-account',
    },

    callbacks: {

      authorized({ auth, request: { nextUrl } }) {
        console.log({ auth });
        // const isLoggedIn = !!auth?.user;
  
        // const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
        // if (isOnDashboard) {
        //   if (isLoggedIn) return true;
        //   return false; // Redirect unauthenticated users to login page
        // } else if (isLoggedIn) {
        //   return Response.redirect(new URL('/dashboard', nextUrl));
        // }
        return true;
      },

      jwt({ token, user }){
        if( user ){
          token.data = user;
        }
        return token;
      },
      session({session, token, user }){
        session.user = token.data as any;
        return session;
      },

    },
  
    providers: [

        Credentials({
            async authorize(credentials) {
      
              const parsedCredentials = z
                .object({ email: z.string().email(), password: z.string().min(6) })
                .safeParse(credentials);

                console.log(parsedCredentials.success);

                if ( !parsedCredentials.success ) return null;

                const { email, password } = parsedCredentials.data;
                

                //Buscar el correo
                const user = await prisma.user.findUnique({where: { email: email.toLowerCase() }});

                if(!user) return null;

                //Comprar las contraseñas
                if( !bcryptjs.compareSync(password, user.password )) return null;

                //Regresar el usuario
                const {password:_, ...rest } = user;
                
                return rest;//Se envia el usuario sin la contraseña
            }
        })

    ]
} 

export const {  signIn, signOut, auth, handlers } = NextAuth( authConfig );