declare module '@/lib/cloudinary' {
  export function uploadImageToCloudinary(file: File): Promise<string>;
}