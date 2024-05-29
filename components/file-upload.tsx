"use client"

import { UploadDropzone } from "@/lib/uploadthing"
import '@uploadthing/react/styles.css'
import { X } from "lucide-react"
import Image from "next/image"
interface FileUploadProps {
    onChange: (url?:string)=>void,
    value: string,
    endpoint: 'serverImage' | 'messageFile'
}

export const FileUpload = ({
    onChange,
    value,
    endpoint
}: FileUploadProps)=>{

    const fileType = value?.split('.').pop();

    if(value && fileType!=='pdf'){
        return (
            <div className=" relative h-20 w-20">
                <Image
                    fill
                    src={value}
                    alt="upload"
                    className=" rounded-full"
                />
                <button onClick={()=>onChange("")}
                className=" bg-rose-500 text-white p-1 absolute rounded-full top-0 right-0 shadow-sm"
                type="button"
                >
                    <X className=" h-4 w-4" />
                </button>
            </div>
        )
    }


    return (
        <main className="flex h-fit flex-col items-center justify-between p-2">
      <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
            console.log(res)
          // Do something with the response
          onChange(res?.[0].url)
          
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
    )
}