import { Avatar, Box, Typography } from "@mui/material";
import { Fragment, useEffect, useRef } from "react";

function Message({ mine, sameSender }) {
  return (
    <Fragment>
      {mine ? (
        <Box display={"flex"} gap={2} px={2} justifyContent={"end"} my={1}>
          <Box display={"flex"} flexDirection={"column"} gap={0.5}>
            <Typography
              maxWidth={400}
              variant="body2"
              lineHeight={1.25}
              sx={{
                bgcolor: "background.link",
                px: 4,
                py: 2,
                borderRadius: "20px 20px 0px 20px",
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae deleniti obcaecati blanditiis fugiat nisi corrupti,
              quis doloremque, laudantium facilis earum dolore dolor dolorum
              architecto, modi praesentium quisquam repellat odit impedit.
            </Typography>
            {sameSender || (
              <Typography
                variant="body2"
                sx={{ fontSize: 12 }}
                alignSelf={"end"}
              >
                time
              </Typography>
            )}
          </Box>
        </Box>
      ) : (
        <Box display={"flex"} gap={2} px={2}>
          <Avatar sx={{ width: 36, height: 36, alignSelf: "end", mb: 4.75 }} />
          <Box display={"flex"} flexDirection={"column"} gap={0.5}>
            <Typography
              maxWidth={400}
              variant="body2"
              lineHeight={1.25}
              sx={{
                bgcolor: "background.input",
                px: 4,
                py: 2,
                borderRadius: "20px 20px 20px 0px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              ipsum corporis minus illum aspernatur ea harum voluptatum facere
              debitis provident!
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 12 }}>
              time
            </Typography>
          </Box>
        </Box>
      )}
    </Fragment>
  );
}

export default Message;
