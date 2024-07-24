import Frame1 from './components/Frame1';
import Header from './components/Header';
import SideBar from './components/SideBar';
import UserTable from './components/UserTable';
import ModalAddUser from './components/ModalAddUser';
import ModalEditUser from './components/ModalEditUser';
import ModalDeleteUser from './components/ModalDeleteUser';

const bgColor = '#F0F2F5';

function App() {
  return (
    <div className={`h-[100vh] w-[100%] bg-[${bgColor}] fixed`}>
      <Header></Header>
      <div className="flex px-[2.4rem] gap-12 w-[100%]">
        <SideBar></SideBar>
        <Frame1>
          <UserTable></UserTable>
        </Frame1>
      </div>
      {/* <ModalAddUser></ModalAddUser> */}
      {/* <ModalEditUser></ModalEditUser> */}
      <ModalDeleteUser></ModalDeleteUser>
    </div>
  );
}

export default App;
