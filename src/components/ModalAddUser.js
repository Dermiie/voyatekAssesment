// const bgColor = '#F0F2F5';

import { useModal } from '../contexts/modalContext';

function ModalAddUser() {
  const { handleCloseModal } = useModal();
  return (
    <div className="darkBG">
      <div className="centered">
        <div className="modal h-[599px] w-[488px] px-[32px] pt-[32px] pb-[56px] flex flex-col gap-[24px]">
          <header className="relative flex items-center justify-center pt-3">
            <div onClick={handleCloseModal} className="top-0 right-0 absolute">
              <img src="./X.png" alt="icon"></img>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="bg-[#D2E4FE] h-[6.4rem] w-[6.4rem] flex items-center justify-center rounded-full">
                <img src="./Activeuser.png" alt="icon"></img>
              </div>
              <p className="text-[#1d2739] font-bold text-[24px]">New User</p>
            </div>
          </header>
          <body>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col ">
                <label htmlFor="email" className="heavy">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="border-2 rounded-md h-[44px]"
                ></input>
              </div>
              <div className="flex flex-col ">
                <label htmlFor="fullname" className="heavy">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  className="border-2 rounded-md h-[44px]"
                ></input>
              </div>
              <div className="flex flex-col ">
                <label htmlFor="role" className="heavy">
                  Role
                </label>
                <select id="role" className="border-2 rounded-md h-[44px]">
                  <option value={'Admin'}>Admin</option>
                  <option value={'Sales Manager'}>Sales Manager</option>
                  <option value={'Sales Representative'}>
                    Sales Representative
                  </option>
                </select>
              </div>
              <div className="flex flex-col ">
                <label htmlFor="password" className="heavy">
                  Create Password
                </label>
                <input
                  type="text"
                  id="password"
                  className="border-2 rounded-md h-[44px]"
                ></input>
              </div>

              <button className="bg-[#0A6DE4] w-[100%] text-[#ffffff] rounded-md h-[44px]">
                Add User
              </button>
            </form>
          </body>
        </div>
      </div>
    </div>
  );
}

export default ModalAddUser;
