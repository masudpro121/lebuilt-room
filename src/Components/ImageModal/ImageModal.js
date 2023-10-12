import Image from "next/image";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DownloadImg from "@/assets/images/download.png"
import CrossImg from "@/assets/images/cross.png"
import downloadImage from "@/utils/downloadImage";

function ImageModal({ children, img }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className=" w-[95%] md:w-[45%]" onClick={handleShow}>{children}</div>
      <Modal centered show={show} onHide={handleClose}>
        <div className="px-5 pb-3">
          <div  onClick={handleClose} className="cursor-pointer">
            <Image className="w-8 absolute right-2 top-3" src={CrossImg} />
          </div>
          <img src={img} className="w-full h-full mt-5 rounded-md " />
          <div onClick={()=>downloadImage(img)} className="flex cursor-pointer gap-2 rounded-md bg-[#9D5C0D] text-white items-center justify-center w-40 m-auto mt-3">
            <Image className="w-5" src={DownloadImg} />
            <p className="m-0 py-2.5 ">Download</p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ImageModal;
