'use client';

import { FaFacebook } from "react-icons/fa";
import { initiateFacebookLogin } from "../lib/appwrite";




export default function SocialAuthButtons() {
  return (
    <button 
      onClick={initiateFacebookLogin}
      className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
    >
      <FaFacebook/>
      Continue with Facebook
    </button>
  );
}