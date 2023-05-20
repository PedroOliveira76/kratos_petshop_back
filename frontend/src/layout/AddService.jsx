import React from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import grooming from "../assets/images/grooming.svg";
import medicalReport from "../assets/images/medical-report.svg";
import petBox from "../assets/images/pet-box.svg";
import petFood from "../assets/images/pet-food.svg";
import petHospital from "../assets/images/pet-hospital.svg";
import petShop from "../assets/images/pet-shop.svg";
import petSoap from "../assets/images/pet-soap.svg";
import Pet from "../assets/images/pet.svg";
import vetApp from "../assets/images/vet-app.svg";
import nailClipper from "../assets/images/nail-clipper.svg";

const AddService = ({ closeModal }) => {

  

  return (
    <>
      <form class="bg-gray-100 p-3 rounded-lg relative">
        <button
          type="submit"
          className="p-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center absolute right-[70px] top-3"
          onClick={(e) => {
            e.preventDefault();
            closeModal;
            console.log("ASDASd");
          }}
        >
          <AiOutlineCheck />
        </button>
        <button
          className="p-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center mb-4 absolute right-3 top-3"
          onClick={closeModal}
        >
          <AiOutlineClose />
        </button>
        <h1 className="text-2xl text-left font-bold mb-2 leading-none">
          Adicionar Serviço ao Chico Bento
        </h1>
        <div className="flex flex-col justify-between w-[600px]">
          <div className="flex flex-row justify-between gap-5">
            <label
              htmlFor="myCheckbox1"
              class="flex items-center cursor-pointer"
              title="Banho"
            >
              <input type="checkbox" id="myCheckbox1" class="" />
              <div class="custom-checkbox w-[100%] h-[130px] bg-brand-orange rounded-[8px] inline-block self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2">
                <img
                  src={petSoap}
                  alt="Imagem de Banho"
                  class="w-full h-full object-cover rounded-md"
                />
              </div>
            </label>

            <label
              htmlFor="myCheckbox2"
              class="flex items-center cursor-pointer"
              title="Tosa"
            >
              <input type="checkbox" id="myCheckbox2" class="" />
              <div class="custom-checkbox w-[100%] h-[130px] bg-brand-orange rounded-[8px] inline-block self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2">
                <img
                  src={grooming}
                  alt="Imagem de Tosa"
                  class="w-full h-full object-cover rounded-md"
                />
              </div>
            </label>
            <label
              htmlFor="myCheckbox3"
              class="flex items-center cursor-pointer"
              title="Cortar Unhas"
            >
              <input type="checkbox" id="myCheckbox3" class="" />
              <div class="custom-checkbox w-[100%] h-[130px] bg-brand-orange rounded-[8px] inline-block self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2">
                <img
                  src={nailClipper}
                  alt="Imagem de Cortar Unhas"
                  class="w-full h-full object-cover rounded-md"
                />
              </div>
            </label>
            <label
              htmlFor="myCheckbox4"
              class="flex items-center cursor-pointer"
              title="Entrega a domicílio"
            >
              <input type="checkbox" id="myCheckbox4" class="" />
              <div class="custom-checkbox w-[100%] h-[130px] bg-brand-orange rounded-[8px] inline-block self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2">
                <img
                  src={petBox}
                  alt="Imagem de Entrega a domicílio"
                  class="w-full h-full object-cover rounded-md"
                />
              </div>
            </label>

            {/* <label for="meuCheckbox" class="flex items-center cursor-pointer">
                <input type="checkbox" id="meuCheckbox" class=""/>
                <div className="w-[50%] h-[130px] bg-brand-orange rounded-[8px] inline-block  self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2">
                <img src={petSoap} alt="Imagem do Checkbox" class="w-full h-full object-cover rounded-md"/>
                </div>
            </label> */}
            {/* <button className=" custom-checkbox w-[50%] h-[130px] bg-brand-orange rounded-[8px] inline-block  self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2">
              <img src={petSoap} alt="" />
            </button>
            <button className="  w-[50%] h-[130px] bg-brand-orange rounded-[8px] inline-block self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2">
              <img src={grooming} alt="" />
            </button>
            <button className="  w-[50%] h-[130px] bg-brand-orange rounded-[8px] inline-block self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2">
              <img src={nailClipper} alt="" />
            </button>
            <button className="  w-[50%] h-[130px] bg-brand-orange rounded-[8px] inline-block self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white  py-2 px-2">
              <img src={petBox} alt="" />
            </button> */}
          </div>
        </div>
      </form>
    </>
  );
};

export default AddService;
