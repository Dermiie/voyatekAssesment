function Nav() {
  return (
    <ul className="flex gap-12">
      <li className="flex flex-col items-center">
        <div>
          <img src="./BellSimple1.png" alt="notification icon"></img>
        </div>
        <p>Notifications</p>
      </li>
      <li className="flex flex-col items-center">
        <div>
          <img src="./Wallet.png" alt="wallet icon"></img>
        </div>
        <p>Wallet</p>
      </li>
      <li className="flex flex-col items-center">
        <div>
          <img src="./Question.png" alt="question icon"></img>
        </div>
        <p>Inquiries</p>
      </li>
      <li className="flex flex-col items-center">
        <div>
          <img src="./Gear.png" alt="settings icon"></img>
        </div>
        <p>Settings</p>
      </li>
      <li className="flex items-center">
        <img src="./Userimg.png" alt="user"></img>
        <div>
          <img src="./CaretDown.png" alt="icon"></img>
        </div>
      </li>
    </ul>
  );
}

export default Nav;
