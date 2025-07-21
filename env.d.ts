// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_APPWRITE_ENDPOINT: string;
    NEXT_PUBLIC_APPWRITE_PROJECT_ID: string;
    NEXT_PUBLIC_FACEBOOK_APP_ID: string;
    NEXT_PUBLIC_SITE_URL: string;
  }
}