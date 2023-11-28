'use client'
import {useState} from 'react'

const UploadImage = () => {
    const [imageFile, setImageFile] = useState<File>();

    const handleSelectFile = (files:FileList|null) => {
        console.log(files);
        if (files && files[0].size <= 2000000) {
            setImageFile(files[0])
            console.log(files[0]);
        } else {
            throw new Error("File is too large!");
            
        }
    }
    return ( <input type="file" name="image" id="image" onChange={files => handleSelectFile(files.target.files)} /> );
}
 
export default UploadImage;