import { BiCheck } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

const UserRow = ({ name, cpf, active, index }) => {

  

  return (
      <tr className={`w-full text-center bg-white border-b-[1.24px] border-gray-200 hover:bg-gray-100`}>
        <td className="border-[1.24px] border-gray-200 p-4">
          <Link to="/dados-cliente" className="w-full h-full inline-block">{name}</Link>
        </td>
        <td className="border-[1.24px] border-gray-200 p-4">{cpf}</td>
        <td className="border-[1.24px] border-gray-200 p-4">
          {active ? (
            <BiCheck className="m-auto text-green-600" />
          ) : (
            <HiOutlineXMark className="m-auto text-red-500" />
          )}
        </td>
      </tr>
  );
};

export default UserRow;