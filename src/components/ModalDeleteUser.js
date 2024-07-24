function ModalDeleteUser() {
  return (
    <div className="darkBG">
      <div className="centered">
        <div className="modal h-[226px] w-[550px] px-[32px] pt-[32px] pb-[56px] flex flex-col">
          <header>
            <p>Delete this user</p>
          </header>
          <body>
            <p>
              This user and all associated date would be permanently removed, Do
              you wish to continue?
            </p>
          </body>
          <div>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDeleteUser;
