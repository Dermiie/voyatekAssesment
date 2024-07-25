import Frame1 from './components/Frame1';
import Header from './components/Header';
import SideBar from './components/SideBar';
import UserTable from './components/UserTable';
import ModalAddUser from './components/ModalAddUser';
import ModalEditUser from './components/ModalEditUser';
import ModalDeleteUser from './components/ModalDeleteUser';
import { useModal } from './contexts/modalContext';

const bgColor = '#F0F2F5';

function App() {
  const { modalIsActive, addUserForm, editUserForm, deleteUserForm } =
    useModal();
  return (
    <div className={`h-[100vh] w-[100%] bg-[${bgColor}] fixed`}>
      <Header></Header>
      <div className="flex px-[2.4rem] gap-12 w-[100%]">
        <SideBar></SideBar>
        <Frame1>
          <UserTable></UserTable>
        </Frame1>
      </div>
      {modalIsActive && addUserForm ? (
        <div>
          <ModalAddUser></ModalAddUser>
        </div>
      ) : (
        ''
      )}
      {modalIsActive && editUserForm ? (
        <div>
          <ModalEditUser></ModalEditUser>
        </div>
      ) : (
        ''
      )}
      {modalIsActive && deleteUserForm ? (
        <div>
          <ModalDeleteUser></ModalDeleteUser>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
