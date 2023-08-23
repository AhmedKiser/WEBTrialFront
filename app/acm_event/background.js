import Image from "next/image";
import CustomButton from "../components/CustomButton";
import TopButton from "../components/TopButton";

const Background = () => {
  const image = [ "/Rectangle 34.png"]
  return (
    <div className="">
    
      <div className="flex flex-row mx-[300px] my-[100px]">
        <div className="basis-1/2 m-[10px]  h-[400px]">
          <h1 className="text-6xl text-center">Our Event</h1>
          <p className="text-2xl text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>   
        <div className="basis-1/2  h-[400px]">
          {/* <Image src="/Rectangle 34.png" width ='540' height= '403' className="w-[100%] h-[100%]"></Image> */}
          <div className="grid grid-cols-3 gap-x-3 gap-y-6">
          <Image src="/Rectangle 34.png" width ='100' height= '125' className="w-32 h-32"></Image>
          <Image src="/Rectangle 34.png" width ='125' height= '125' className="w-32 h-32"></Image>
          <Image src="/Rectangle 34.png" width ='125' height= '125' className="w-32 h-32"></Image>
          <Image src="/Rectangle 34.png" width ='125' height= '125' className="w-32 h-32"></Image>
          <Image src="/Rectangle 34.png" width ='125' height= '125' className="w-32 h-32"></Image>
          <Image src="/Rectangle 34.png" width ='125' height= '125' className="w-32 h-32"></Image>
          <Image src="/Rectangle 34.png" width ='125' height= '125' className="w-32 h-32"></Image>
          <Image src="/Rectangle 34.png" width ='125' height= '125' className="w-32 h-32"></Image>
          <Image src="/Rectangle 34.png" width ='125' height= '125' className="w-32 h-32"></Image>


          </div>
        </div>
      </div>

      <div className="m[250px] p[30px]">
        <h1 className="text-6xl text-center m-[50px]">Signature Events</h1>
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 mx-[330px]">
        
          <div><Image src="/Rectangle 34.png" width ='360' height= '240' className="w-[100%] h-240"></Image></div>
          <div><Image src="/Rectangle 34.png" width ='360' height= '240' className="w-[100%] h-240"></Image></div>
          <div><Image src="/Rectangle 34.png" width ='360' height= '240' className="w-[100%] h-240"></Image></div>
          <div><Image src="/Rectangle 34.png" width ='360' height= '240' className="w-[100%] h-240"></Image></div>


        
        


        
        </div>

      </div>



    </div>
    
  

  );
};

export default Background;
