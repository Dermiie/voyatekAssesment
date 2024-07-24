const listItemStyle = 'flex gap-5 items-center px[1.2rem] py[4rem]';
const textStyle = 'text-[14px] text-[#94A3B8] p-[0.4rem] font-normal';

function SideBar() {
  return (
    <div className=" bg-[#ffffff] fixed top-[108px] left-[24px] border-[1px] w-[22.4rem] h-[61rem] rounded-md">
      <div className="flex flex-col px-[1.6rem] h-[100%]">
        <div>
          <h2 className=" text-[12px] py-[1.6rem] text-start heavy">
            Settings
          </h2>
          <ul className="px-[8px] flex flex-col gap-[1.6rem]">
            <li className={listItemStyle}>
              <img src="./User.png" alt="user"></img>
              <p className={textStyle}>Account</p>
            </li>
            <li className={listItemStyle}>
              <img src="./Lock.png" alt="lock"></img>
              <p className={textStyle}>Security</p>
            </li>
            <li className={listItemStyle}>
              <img src="./BellSimple.png" alt="notification"></img>
              <p className={textStyle}>Notifications</p>
            </li>
            <li className={listItemStyle}>
              <img src="./Money.png" alt="user"></img>
              <p className={textStyle}>Pricing</p>
            </li>
            <li className={listItemStyle}>
              <img src="./Tag.png" alt="cloud"></img>
              <p className={textStyle}>Sales</p>
            </li>
            <li className={listItemStyle}>
              <img src="./Users.png" alt="user"></img>
              <p className={textStyle}>Users & Roles</p>
            </li>
            <li className={listItemStyle}>
              <img src="./Cloud.png" alt="cloud"></img>
              <p className={textStyle}>Backups</p>
            </li>
          </ul>
        </div>
        <div className=" mt-auto mb-8 border-[1px] p-[16px]">
          <p>Back to dashboard</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
