
import { Box, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const animationKeyframes = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

const animation = `${animationKeyframes} 1s linear infinite`;

function Spinner() {
  return (
    <Box
      style={{
        width: '30px',
        height: '30px',
        margin: 'auto',
      }}
      className="loader-inner"
    >
      <Box
        as={motion.div}
        animation={animation}
        sx={{
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #3498db',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
        }}
      />

    </Box>
  );
}

export default Spinner;
