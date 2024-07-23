import Frame1 from './components/Frame1';
import Frame2 from './components/Frame2';
import Header from './comgit add README.mdponents/Header';
import SideBar from './components/SideBar';

const bgColor = '#F0F2F5';

function App() {
  return (
    <div className={`h-[100vh] bg-[${bgColor}]`}>
      <Header></Header>
      <SideBar></SideBar>
      <Frame1></Frame1>
      <Frame2></Frame2>
    </div>
  );
}

export default App;
