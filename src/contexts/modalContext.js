import { createContext, useContext, useReducer } from 'react';

const ModalContext = createContext();

const initialState = {
  modalIsActive: false,
  addUserForm: false,
  editUserForm: false,
  deleteUserForm: false,
};

function ModalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { modalIsActive, addUserForm, editUserForm, deleteUserForm } = state;

  function reducer(state, action) {
    switch (action.type) {
      case 'open/addUser':
        return {
          ...state,
          modalIsActive: true,
          addUserForm: true,
        };

      case 'editUser':
        return {
          ...state,
          modalIsActive: true,
          editUserForm: true,
        };

      case 'deleteUser':
        return {
          ...state,
          modalIsActive: true,
          deleteUserForm: true,
        };

      case 'closeModal':
        return {
          initialState,
        };

      default:
        throw new Error('unkown action');
    }
  }

  function handleAddUser() {
    dispatch({ type: 'open/addUser' });
  }

  function handleEditUser() {
    dispatch({ type: 'editUser' });
  }

  function handleCloseModal() {
    dispatch({ type: 'closeModal' });
  }
  function handleDeleteUser() {
    dispatch({ type: 'deleteUser' });
  }

  return (
    <ModalContext.Provider
      value={{
        modalIsActive,
        handleCloseModal,
        handleAddUser,
        handleEditUser,
        handleDeleteUser,
        addUserForm,
        editUserForm,
        deleteUserForm,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined)
    throw new Error('Cities context was used outside its provider');
  return context;
}

export { ModalProvider, useModal };
