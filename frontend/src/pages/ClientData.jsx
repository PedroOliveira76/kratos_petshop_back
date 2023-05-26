import Header from "../components/Header";
import PetCard from "../components/PetCard";
import Modal from "../components/Modal";

import { Link } from "react-router-dom";
import PetList from "../components/PetCard";

const ClientData = () => {
  return (
    <div>
      <Header page="client-data" />

      <div className="w-full h-[92vh] flex justify-center items-center">
        <div className=" bg-white w-[1200px] h-[650px] text-center rounded-lg flex flex-col items-center justify-evenly p-4 drop-shadow-xl shadow-neutral-900">
          <form className="gap-4 w-full h-full text-left flex flex-row">
            <div className=" w-[60%]">
              <div className=" flex flex-col justify-between gap-4 rounded-lg h-full">
                <div className="bg-gray-100 p-3 h-full rounded-lg">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <h1 className="text-2xl font-bold mb-2">
                        Dados do Cliente
                      </h1>
                      <div className="flex flex-wrap justify-between gap-2">
                        <div className="w-[45%]">
                          <label htmlFor="name">Nome Completo:</label>
                          <input
                            type="text"
                            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                          />
                        </div>
                        <div className="w-[45%]">
                          <label htmlFor="name">CPF:</label>
                          <input
                            type="text"
                            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                            value={"123.456.789-00"}
                          />
                        </div>
                        <div className="w-[45%]">
                          <label htmlFor="name">Telefone:</label>
                          <input
                            type="text"
                            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                            value={"(57) 99158-7603"}
                          />
                        </div>
                        <div className="w-[45%]">
                          <label htmlFor="name">Ativo:</label>
                          <select name="viagem" className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2">
                            <option value=""></option>
                            <option value="sim">Sim</option>
                            <option value="nao">Não</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="h-full mt-4">
                      <h1 className="text-2xl font-bold mb-2">Endereço</h1>
                      <div className="flex flex-col justify-between gap-4">
                        <div className="w-[45%]">
                          <label htmlFor="name">CEP:</label>
                          <input
                            type="text"
                            className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                            value={"(57) 99158-7603"}
                          />
                        </div>
                        <div className="flex flex-wrap justify-between gap-4">
                          <div className="w-[45%]">
                            <label htmlFor="name">Rua:</label>
                            <input
                              type="text"
                              className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                              value={"(57) 99158-7603"}
                            />
                          </div>
                          <div className="w-[45%]">
                            <label htmlFor="name">Bairro:</label>
                            <input
                              type="text"
                              className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                              value={"(57) 99158-7603"}
                            />
                          </div>
                          <div className="w-[45%]">
                            <label htmlFor="name">Cidade:</label>
                            <input
                              type="text"
                              className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                              value={"(57) 99158-7603"}
                            />
                          </div>
                          <div className="w-[45%]">
                            <label htmlFor="name">Estado:</label>
                            <input
                              type="text"
                              className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                              value={"(57) 99158-7603"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-5">
                  <button className=" w-[50%] bg-brand-orange rounded-[8px]  h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2 flex justify-center items-center cursor-pointer ">
                    Editar Dados
                  </button>

                  <Modal type="addPet"></Modal>
                  <Modal type="buyProductsClient"></Modal>

                  {/* <button className=" w-[50%] bg-brand-orange rounded-[8px] inline-block h-12 self-center mt-3 slide-bck-center hover:shadow-xl hover:text-white py-2 px-2 ">
                    Adicionar Pet
                  </button>  */}
                </div>
              </div>
            </div>
            <div className="bg-gray-100 w-[40%] p-3 rounded-lg">
              <h1 className="text-2xl font-bold">Dados dos Pets</h1>
              <div className="flex flex-col justify-between h-[650px] mt-6">
                <div className="flex flex-col gap-4 overflow-y-scroll h-[537px]">
                  <PetList></PetList>
                </div>
              </div>
            </div>
            {/* <div className="bg-gray-300 col-span-1 p-4">
              <h1 className="text-2xl font-bold">Cadastro do Pet</h1>
              <div className="flex flex-col justify-between h-[620px] mt-10">
                <div className="flex flex-col gap-14">
                  <div className="w-full">
                    <label htmlFor="name">Nome:</label>
                    <input
                      type="text"
                      className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="name">Raça:</label>
                    <input
                      type="text"
                      className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="name">Porte:</label>
                    <input
                      type="text"
                      className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="name">Idade:</label>
                    <input
                      type="text"
                      className="border  border-gray-300 focus:outline-orange-300 focus:border-orange-300 drop-shadow-xl rounded-lg text-base pl-3 h-10 w-full mt-2"
                    />
                  </div>
                </div>

                <div className="flex gap-5">
                  <button className=" w-[45%] bg-neutral-300 rounded-lg py-2 px-2 hover:shadow-2xl ">
                    Editar Dados
                  </button>
                  <button className=" w-[45%] bg-neutral-300 rounded-lg py-2 px-2 hover:shadow-2xl ">
                    Desativar Usuário
                  </button>
                </div>
              </div>
            </div> */}
          </form>
        </div>
      </div>

      {/* <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p>Kaioasdasd</p>
          <h2 className="text-xl font-bold mb-4">Título do Modal</h2>
          <p>Conteúdo do modal aqui...</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Fechar
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default ClientData;
