import { Box, Button, Heading, Input, Select, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  function gotoHome() {
    navigate("/");
  }
  return (
    <Box>
      <Button bg="red.500" onClick={gotoHome}>
        Home
      </Button>
      <Heading>Add Doctor</Heading>
      <Stack direction="column" gap="0.5rem">
        <Box>
          <Input type="text" placeholder="Name" />
        </Box>

        <Box>
          <Select placeholder="Select option">
            <option value="1">ABC</option>
            <option value="2">DEF</option>
            <option value="3">HIJ</option>
          </Select>
        </Box>

        <Box>
          <Select placeholder="Specialisation">
            <option value="4">x</option>
            <option value="5">y</option>
            <option value="6">z</option>
          </Select>
        </Box>

        <Box>
          <Input type="number" placeholder="Salary" />
        </Box>

        <Box>
          <Button bg="red.100"> Add </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default Form;
