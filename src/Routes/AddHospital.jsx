import { Box, Button, Heading, Input, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function AddHospital() {
  const navigate = useNavigate();
  function gotoHome() {
    navigate("/");
  }
  return (
    <Box>
      <Button bg="red.200" onClick={gotoHome}>
        Home
      </Button>
      <Heading>Add Hospital</Heading>
      <Stack direction="column" gap="0.5rem">
        <Box>
          <Input type="text" placeholder="Name" />
        </Box>

        <Box>
          <Input type="text" placeholder="Address" />
        </Box>

        <Box>
          <Button bg="yellow.200"> Add </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default AddHospital;
