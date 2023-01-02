import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearDeleteSuccessInAdmin,
  clearEditSuccessInAdmin,
  clearErrorsInAdmin,
  deleteUsers,
  getAllUsers,
  updateUserRole,
} from "../../../../redux/slices/AdminSlice";
import { Alert } from "../../../components/Alert";
import LoadingScreen from "../../../components/LoadingScreen";
import { HeadLine } from "../dashboard/DashboardLayout.styles";
import { CardWrapper, Left, Right } from "../products/productsLayout.styles";

const UsersLayout = () => {
  const dispatch = useDispatch();
  const { loading, errorInAdmin, editedSuccess, deletedSuccess, adminUsers } =
    useSelector((state) => state.admin);
  useEffect(() => {
    if (editedSuccess) {
      Alert({
        title: "",
        text: "Role Updated!",
      });
      dispatch(clearEditSuccessInAdmin());
      dispatch(getAllUsers({}));
    }
    if (deletedSuccess) {
      Alert({
        title: "",
        text: "Account Removed!",
      });
      dispatch(clearDeleteSuccessInAdmin());
      dispatch(getAllUsers({}));
    }
    if (errorInAdmin) {
      Alert({
        title: "Oops!",
        text: errorInAdmin,
      });
      dispatch(clearErrorsInAdmin());
    }
  }, [editedSuccess, errorInAdmin, deletedSuccess]);

  return (
    <>
      {loading ? (
        <LoadingScreen size="small" />
      ) : (
        <>
          <HeadLine>Users</HeadLine>

          <>
            {adminUsers.map((user, index) => {
              const { userInfo } = useSelector((state) => state.user);
              const [role, setRole] = useState(user.role);
              const initRole = user.role;

              const submitHandler = () => {
                dispatch(
                  updateUserRole({
                    id: user._id,
                    details: { name: user.name, email: user.email, role: role },
                  })
                );
              };
              const SubmitDelete = () => {
                dispatch(deleteUsers({ id: user._id }));
              };

              return (
                <CardWrapper
                  key={index}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                >
                  <Left>
                    <p className="admin-CardWrapper-index">{index + 1}</p>

                    <p>
                      &nbsp;Name: <span>{user.name}</span>
                    </p>
                    <p>
                      &nbsp;Email: <span>{user.email}</span>
                    </p>
                  </Left>
                  <Right>
                    <Select
                      value={role}
                      onChange={(e) => {
                        setRole(e.target.value);
                      }}
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </Select>
                    <Btn disabled={initRole === role} onClick={submitHandler}>
                      SET
                    </Btn>
                    <Btn2
                      onClick={SubmitDelete}
                      disabled={userInfo._id === user._id}
                    >
                      REMOVE
                    </Btn2>
                  </Right>
                </CardWrapper>
              );
            })}
          </>
        </>
      )}
    </>
  );
};

export default UsersLayout;

export const Select = styled.select`
  padding: 0 0.5rem;
  color: #2bb594;
  font-weight: 700;
  outline: none;
  border: none;
`;
export const Option = styled.option``;
export const Btn = styled.button`
  width: max-content !important;
  padding: 1rem 1rem !important;
  border: 2px solid white;
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  background-color: #2bb594;
  color: white;
  box-shadow: 0 5px 1rem rgba(0, 0, 0, 0.15);
  border-radius: 5px !important;

  &:disabled {
    background-color: #2bb594;
    opacity: 0.3;
    box-shadow: none;
  }
`;
export const Btn2 = styled.button`
  width: max-content !important;
  padding: 1rem 1rem !important;
  border: 2px solid white;
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  background-color: tomato !important;
  color: white;
  box-shadow: 0 5px 1rem rgba(0, 0, 0, 0.15);
  border-radius: 5px !important;
  &:hover {
    background-color: red !important;
  }
  &:disabled {
    opacity: 0.3;
    box-shadow: none;
  }
`;
