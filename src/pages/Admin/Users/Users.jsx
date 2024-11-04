import { DevTool } from "@hookform/devtools";
import {
  Avatar,
  Box,
  Button,
  Modal,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { debounce } from "lodash";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { _users } from "~/_fakeData";
import Search from "~/components/Search/Search";
import ModalAddUser from "./Modals/ModalAddUser";
import ModalEditUser from "./Modals/ModalEditUser";
import ModalDelete from "./Modals/ModalDelete";
import useShow from "~/hooks/useShow";

function Users() {
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [users, setUsers] = useState([]);

  //   modal
  const [showAdd, toggleShowAdd] = useShow();
  const [showEdit, toggleShowEdit] = useShow();
  const [showDelete, toggleShowDelete] = useShow();
  const [modalUser, setModalUser] = useState({});

  useEffect(() => {
    // call api first time
    setUsers(_users);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const searchUsers = debounce(async (value) => {
    if (value.trim()) {
      const filterUsers = _users.filter(
        (user) =>
          user.name.toLowerCase().includes(value) || user.email.includes(value)
      );
      return setUsers(filterUsers);
    }
    return setUsers(_users);
  }, 500);
  return (
    <>
      <Paper sx={{ mt: 2 }}>
        <Box display={"flex"} justifyContent={"space-between"} padding={2}>
          <Search
            placeholder="Search name or email"
            handleSearch={searchUsers}
          />

          <Button variant="contained" size="small" onClick={toggleShowAdd}>
            Add user
          </Button>
        </Box>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Full name</TableCell>
                <TableCell>Date of birth</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Veriried</TableCell>
                <TableCell colSpan={2} align="center">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .slice(
                  (page - 1) * rowsPerPage,
                  (page - 1) * rowsPerPage + rowsPerPage
                )
                .map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.dob}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.verified ? "yes" : "no"}</TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        onClick={() => {
                          setModalUser(user);
                          toggleShowEdit();
                        }}
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        color="error"
                        onClick={() => {
                          setModalUser(user);
                          toggleShowDelete();
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          count={Math.ceil(users.length / 10)}
          page={page}
          onChange={handleChangePage}
        />
      </Paper>
      <ModalAddUser show={showAdd} toggleShow={toggleShowAdd} />
      <ModalEditUser
        show={showEdit}
        toggleShow={toggleShowEdit}
        user={modalUser}
      />
      <ModalDelete
        show={showDelete}
        toggleShow={toggleShowDelete}
        user={modalUser}
      />
    </>
  );
}

export default Users;
