import { useModal } from '../contexts/modalContext';

const tableHeaderData = ['Name', 'Address', 'Role', 'Action'];
const tableBodyData = [
  {
    name: 'Taiwo Isaac',
    mail: 'Taiwoisaac@gmail.com',
    role: 'Administrator',
  },
  {
    name: 'Seun Fagbemi',
    mail: 'Seunfagbemi@gmail.com',
    role: 'Sales Manager',
  },
  {
    name: 'Dare Oyejide',
    mail: 'Dareoyejide@gmail.com',
    role: 'Sales Manager',
  },
  {
    name: 'Studimatch',
    mail: 'Studimatch@gmail.com',
    role: 'Sales Representatives',
  },
];

function UserTable() {
  const { handleAddUser, handleEditUser, handleDeleteUser } = useModal();
  return (
    <div className=" bg-white fixed w-[1104px] h-[429px] top-[310px] left-[304px] rounded-md">
      <header className="flex gap-2 p-[1.6rem]">
        <div className="flex gap-5">
          <input
            className="h-[4rem] w-[29rem] border-2 px-4 py-2"
            type="text"
            placeholder="Search here...."
          ></input>
          <div className="flex align-middle items-center border-2 py-[0.8rem] px-[1.2rem] rounded-md">
            <div>
              <img src="./button-icon.png" alt="filter icon"></img>
            </div>
            <p>Filter</p>
          </div>
        </div>
        <button
          onClick={handleAddUser}
          className="ml-auto bg-[#0A6DE4] text-[#ffffff] px-7 py-[0.8rem] rounded-md"
        >
          New user
        </button>
      </header>
      <table className="min-w-full divide-y">
        <thead>
          <tr>
            {tableHeaderData.map((data, i) => (
              <th
                key={i}
                className="text-start px-[1.6rem]  py-5 heavy  bg-[#F0F2F5]"
              >
                {data}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBodyData.map((row, id) => {
            return (
              <tr key={id}>
                <td className="text-start px-[1.6rem] py-[2.4rem] heavy">
                  {row.name}
                </td>
                <td className="text-start px-[1.6rem] py-[2.4rem]">
                  {row.mail}
                </td>
                <td className="text-start px-[1.6rem] py-[2.4rem]">
                  {row.role}
                </td>
                <td className="flex  px-[1.6rem] py-[2.4rem]  gap-3">
                  <p
                    onClick={handleEditUser}
                    className="text-[#0A6DE4] cursor-pointer "
                  >
                    Edit
                  </p>
                  <p
                    onClick={handleDeleteUser}
                    className="text-[#98A2B3] cursor-pointer"
                  >
                    Remove
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
