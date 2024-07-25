import { useModal } from '../contexts/modalContext';

function ModalDeleteUser() {
  const { handleCloseModal } = useModal();
  return (
    <div className="darkBG">
      <div className="centered">
        <div className="modal h-[226px] w-[550px] px-[56px] pt-[56px] pb-[56px] gap-4 flex flex-col justify-center text-center">
          <header>
            <p className="text-[#1d2739] font-bold text-[24px]">
              Delete this user
            </p>
          </header>
          <body>
            <p className=" text-[20px] font-light">
              This user and all associated date would be permanently removed, Do
              you wish to
            </p>
          </body>
          <div className="flex mx-auto mt-auto gap-3">
            <button
              onClick={handleCloseModal}
              className="font-bold  p-[12px] text-[#647995] bg-[#D0D5DD] rounded-md  border-2 "
            >
              Cancel Action
            </button>
            <button className="text-[#D42620] font-bold border-2 bg-[#EB9B98]  rounded-md px-[16px] py-[12px] ">
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDeleteUser;
