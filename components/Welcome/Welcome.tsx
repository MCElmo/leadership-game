import { Title, Text, Anchor, Image, Paper, Button, useMantineTheme } from '@mantine/core';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const [lost, setLost] = useState(false);
  const [won, setWon] = useState(false);

  const [gameActive, setGameActive] = useState(true);

  const constraintsRef = useRef(null);

  const elonRef = useRef(null);
  const obamaRef = useRef(null);
  const oprahRef = useRef(null);
  const billGatesRef = useRef(null);
  const mandelaRef = useRef(null);

  const onCheck = () => {
    setGameActive(false);
  };

  const doConfetti = () => {
    const end = Date.now() + 5 * 1000;

    // go Buckeyes!
    const colors = [theme.colors.violet[5], theme.colors.pink[5]];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  return (
    <>
      <Paper w="100vw" h="100vh" ref={constraintsRef}>
        { lost &&
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
          >
          <Title
            sx={{
              position: 'absolute',
              right: '50%',
              top: '50%',
            }}
            color="red"
            size={200}
          >
            YOU LOSE!
          </Title>
          </motion.div>
        }
        { won &&
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
          >
          <Title
            sx={{
              position: 'absolute',
              right: '50%',
              top: '50%',
            }}
            color="green"
            size={200}
          >
            YOU WIN!
          </Title>
          </motion.div>
        }
      <Button
        bg="green"
        size="xl"
        mx="xl"
        my="xl"
        onClick={() => {
        doConfetti();
        setWon(true);
        onCheck();
      }}
      >
        Win
      </Button>
      <Button
        bg="red"
        size="xl"
        mx="xl"
        my="xl"
        onClick={() => {
        setLost(true);
        onCheck();
      }}
      >
        Lose
      </Button>
      <Title sx={{
        position: 'absolute',
        right: '10%',
        top: '10%',
      }}
      > Engaging
      </Title>
      <Title sx={{
        position: 'absolute',
        right: '10%',
        top: '30%',
      }}
      > Inspiring
      </Title>
      <Title sx={{
        position: 'absolute',
        right: '10%',
        top: '50%',
      }}
      > Technical
      </Title>
      <Title sx={{
        position: 'absolute',
        right: '10%',
        top: '70%',
      }}
      > Relatable
      </Title>
      <Title sx={{
        position: 'absolute',
        right: '10%',
        top: '90%',
      }}
      > Compassionate
      </Title>

      <motion.div
        drag={gameActive}
        dragConstraints={constraintsRef}
        style={{
          width: 200,
          height: 200,
        }}
        transition={{
          duration: 2,
        }}
        animate={gameActive ? undefined : {
          x: '70vw',
          y: '20%',
        }}
      >
        <Image
          sx={{

            img: {
              '-webkit-user-drag': 'none',
            },
          }}
          width={200}
          height={200}
          src="data:image/jpeg;base64,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"
        />
      </motion.div>
      <motion.div
        drag={gameActive}
        transition={{
          duration: 2,
        }}
        dragConstraints={constraintsRef}
        style={{
          width: 200,
          height: 200,
        }}
        animate={gameActive ? undefined : {
          x: '70vw',
          y: '50vh',
        }}
      >
        <Image
          sx={{

            img: {
              '-webkit-user-drag': 'none',
            },
          }}
          width={200}
          height={200}
          src="https://image.cnbcfm.com/api/v1/image/107083077-1656593419933-gettyimages-1395062617-t_w16437_4934a878-972d-4bea-b6ef-b61f4ceeb787.jpeg?v=1682101376"
        />
      </motion.div>
      <motion.div
        drag={gameActive}
        transition={{
          duration: 2,
        }}
        dragConstraints={constraintsRef}
        style={{
         width: 200,
         height: 200,
       }}
        animate={gameActive ? undefined : {
         x: '70vw',
         y: '15vh',
       }}
      >
        <Image
          sx={{

            img: {
              '-webkit-user-drag': 'none',
            },
          }}
          width={200}
          height={200}
          src="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
        />
      </motion.div>
      <motion.div
        drag={gameActive}
        transition={{
          duration: 2,
        }}
        dragConstraints={constraintsRef}
        style={{
          width: 200,
          height: 200,
        }}
        animate={gameActive ? undefined : {
          x: '70vw',
          y: '40vh',
        }}
      >
        <Image
          sx={{

            img: {
              '-webkit-user-drag': 'none',
            },
          }}
          width={200}
          height={200}
          src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Corbis-TL007642_brkxd1.jpg"
        />
      </motion.div>
      <motion.div
        drag={gameActive}
        transition={{
          duration: 2,
        }}
        dragConstraints={constraintsRef}
        style={{
          width: 200,
          height: 200,
        }}
        animate={gameActive ? undefined : {
          x: '70vw',
          y: '-30vh',
        }}
      >
        <Image
          sx={{

            img: {
              '-webkit-user-drag': 'none',
            },
          }}
          width={200}
          height={200}
          src="data:image/jpeg;base64,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"
        />
      </motion.div>
      </Paper>
    </>
  );
}
