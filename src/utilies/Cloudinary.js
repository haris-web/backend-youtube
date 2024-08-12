import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import { v2 as cloudinary } from 'cloudinary';

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_KEY // Click 'View API Keys' above to copy your API secret
    });
    
 const uploadOnCloudinary =async(localFilePath)=>{
    try {
        if(!localFilePath) return false;
        const response = await cloudinary.v2.uploader.upload(localFilePath,{
          resource_type: "auto"
        });
        console.log(response)

    } catch (error) {
        fs.unlinkSync(localFilePath)
    }
 }   


export default uploadOnCloudinary