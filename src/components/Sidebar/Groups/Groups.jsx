import { Box } from "@mui/material";
import { _groups } from "~/_fakeData";
import Group from "./Group/Group";
import { useNavigate, useParams } from "react-router-dom";

function Groups() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <Box height={"calc(100vh - 60px)"} overflow={"auto"}>
      {_groups.map((group) => (
        <Group
          key={group.id}
          selected={id == group.id}
          data={group}
          muted={group.muted}
          unread={group.unread}
          onClick={() => {
            navigate(`/chat/${group.id}`);
          }}
        />
      ))}
    </Box>
  );
}

export default Groups;
