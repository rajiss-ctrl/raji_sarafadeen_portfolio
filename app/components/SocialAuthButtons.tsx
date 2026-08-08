// 'use client';

// import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
// import { initiateFacebookLogin } from "../lib/appwrite";

// interface SocialAuthButtonsProps {
//   onSuccess?: () => void;
//   onError?: (error: Error) => void;
// }

// export default function SocialAuthButtons({ onSuccess, onError }: SocialAuthButtonsProps) {
//   const handleFacebookLogin = async () => {
//     try {
//       await initiateFacebookLogin();
//       if (onSuccess) onSuccess();
//     } catch (error) {
//       console.error('Facebook login failed:', error);
//       if (onError) onError(error as Error);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     // Implement Google login
//     try {
//       // await initiateGoogleLogin();
//       if (onSuccess) onSuccess();
//     } catch (error) {
//       console.error('Google login failed:', error);
//       if (onError) onError(error as Error);
//     }
//   };

//   const handleGithubLogin = async () => {
//     // Implement GitHub login
//     try {
//       // await initiateGithubLogin();
//       if (onSuccess) onSuccess();
//     } catch (error) {
//       console.error('GitHub login failed:', error);
//       if (onError) onError(error as Error);
//     }
//   };

//   return (
//     <div className="flex flex-col gap-3 w-full max-w-xs">
//       <button 
//         onClick={handleFacebookLogin}
//         className="flex items-center justify-center gap-3 bg-[#1877F2] text-white px-4 py-2.5 rounded-lg hover:bg-[#1866D2] transition-all duration-300 hover:shadow-lg hover:shadow-[#1877F2]/30 font-medium text-sm md:text-base"
//       >
//         <FaFacebook size={20} />
//         Continue with Facebook
//       </button>

//       <button 
//         onClick={handleGoogleLogin}
//         className="flex items-center justify-center gap-3 bg-white text-gray-800 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-lg border border-gray-200 font-medium text-sm md:text-base"
//       >
//         <FaGoogle size={20} className="text-[#EA4335]" />
//         Continue with Google
//       </button>

//       <button 
//         onClick={handleGithubLogin}
//         className="flex items-center justify-center gap-3 bg-[#24292E] text-white px-4 py-2.5 rounded-lg hover:bg-[#1B1F23] transition-all duration-300 hover:shadow-lg hover:shadow-[#24292E]/30 font-medium text-sm md:text-base"
//       >
//         <FaGithub size={20} />
//         Continue with GitHub
//       </button>
//     </div>
//   );
// }