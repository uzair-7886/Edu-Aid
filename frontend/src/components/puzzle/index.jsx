import React, { useRef, useState,useEffect } from "react";
import Jimp from 'jimp'  //jimp is an image processing library in nodejs
import image from './image.jpeg'


// got help from this link for jimp : https://img.ly/blog/how-to-manipulate-an-image-with-jimp-in-react/


function Puzzle() {
//   const [image,setImage]=useState("./image.jpeg")
    const [img,setImg]=useState(image)
    const [imageBoxes,setImageBoxes]=useState([])
    const [dataUrls,setDataUrls]=useState([]) //dataurls would contain the string format created throught jimp to embed the image directly into html image tag

    const splitImage=async (image)=>{
        const imageWidth=image.width;
        const imageHeight=image.height;
        // console.log(imageHeight,imageWidth);
        const imageBoxess=[];
        const boxWidth=imageWidth/3;
        const boxHeight=imageHeight/3;
        // console.log(boxHeight,boxWidth);
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                const box={
                    x:boxWidth*i, //x,y coordinates of starting position of the splitted box
                    y:boxHeight*j,
                    width:boxWidth,
                    height:boxHeight,
                    image:image
                }
                imageBoxess.push(box);
            }
        }
        // console.log(imageBoxess);
        // setImageBoxes(imageBoxess);
        return imageBoxess
    }


    const cropImage=async (imageBoxes)=>{
        const croppedImages=[]
        // console.log(imageBoxes.length)
        for(let i=0;i<imageBoxes.length;i++){
            const box=imageBoxes[i]
            console.log(box.image)
            const image=await Jimp.read("image.jpeg") //read original image
            const croppedImage=image.crop(box.x,box.y,box.width,box.height)//https://www.tutorialspoint.com/how-to-crop-an-image-using-crop-function-in-node-jimp 
            croppedImages.push(croppedImage)
        }
        // console.log(croppedImages.length)
        return croppedImages;
    }


    const createDataUrls=async (croppedImages)=>{
        const dataUrls=[]
        // console.log(croppedImages.length)
        for(let i=0;i<croppedImages.length;i++){
            const croppedImage=croppedImages[i]
            // console.log(croppedImage)
            const dataUrl=await croppedImage.getBase64Async(Jimp.AUTO) //https://www.geeksforgeeks.org/how-to-convert-an-image-to-base64-encoding-in-node-js/
            dataUrls.push(dataUrl)
            // console.log(dataUrl)
        }
        return dataUrls;
    }

useEffect(()=>{
    const handleImageOnLoad =async ()=>{
        // const toSplitImg=event.target;
        const splitData =await splitImage(img);
        // console.log(splitData)
        // setImageBoxes(splitData)

        // console.log(imageBoxes.length) //splits image and sets coordinate and  for each box in 
        const croppedImages=await cropImage(splitData)
        const dataUrls=await createDataUrls(croppedImages)
        setDataUrls(dataUrls)
        // console.log("here")
    }
    handleImageOnLoad()
},[])
   

  return (
    <>
        <p>this is a puzzle game</p>
        <img src={img} alt="image" />
        {/* <div>
      {dataUrls.map((dataUrl, index) => (
        <img key={index} src={dataUrl} alt={`Image ${index}`} />
      ))} */}
    {/* </div> */}
    <p>{dataUrls[1]}</p>
    </>
  );
}

export default Puzzle;