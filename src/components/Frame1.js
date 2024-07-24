function Frame1({ children }) {
  return (
    <div className=" top-[10.8rem] left-[30.4rem]">
      <h3 className="">Settings / Users & role setting</h3>
      <h1>Users and Roles</h1>
      <p>Manage all users in your business</p>
      <div>
        <span>Users</span>
        <span>Roles</span>
      </div>
      {children}
    </div>
  );
}

export default Frame1;
