// app/lib/appwrite.ts
import { Client, Account, Databases, Storage, ID, OAuthProvider } from 'appwrite';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { 
  client, 
  account, 
  databases, 
  storage, 
  ID,
  OAuthProvider
};