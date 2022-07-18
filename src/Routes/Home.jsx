
import { useNavigate } from "react-router-dom";

import {
    Box,
    Button
  } from "@chakra-ui/react";
  
  function Home() {
    const navigate = useNavigate();

    function handleDoctors(){
        navigate("/doctoradd")
    }

    function handleHospitals(){
        navigate("/hospitaladd")
    }
    
    return (
      <Box>
        <Button colorScheme='blue' onClick={handleHospitals} >Add Hospital</Button>
        <Button colorScheme='blue' onClick={handleDoctors}>Add Doctor</Button>
      </Box>
    );
  }
  
  export default Home;
  