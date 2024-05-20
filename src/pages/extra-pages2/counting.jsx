import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';

// third party
import { useTimer } from 'react-timer-hook';

// assets
import leopard from 'assets/images/extra-pages2/leopard.png';
import MainCard from 'components/MainCard';

// ==============================|| COUNTING - MAIN ||============================== //

const GetCustomerid = () => {
  console.log('getCustomerId');
};
const TimerBox = ({ count, label }) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MainCard content={false} sx={{ width: { xs: 60, sm: 80 } }}>
      <Stack justifyContent="center" alignItems="center">
        <Box sx={{ py: 1.75 }}>
          <Typography variant={matchDownSM ? 'h4' : 'h2'}>{count}</Typography>
        </Box>
        <Box sx={{ p: 0.5, bgcolor: 'secondary.lighter', width: '100%' }}>
          <Typography align="center" variant="subtitle2">
            {label}
          </Typography>
        </Box>
      </Stack>
    </MainCard>
  );
};

TimerBox.propTypes = {
  count: PropTypes.number,
  label: PropTypes.string
};

function Counting() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 3600 * 24 * 2 - 3600 * 15.5);

  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp: time });
  return (
    <>
      <Grid container spacing={4} direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh', py: 2 }}>
        <Grid item xs={12}>
          <Box sx={{ height: { xs: 310, sm: 420 }, width: { xs: 360, sm: 'auto' } }}>
            <img src={leopard} alt="leopard" style={{ height: '100%', width: '100%' }} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1} alignItems="center" sx={{ mt: -2 }}>
            <Typography align="center" variant="h2">
              Counting
            </Typography>
            <Typography align="center" color="textSecondary">
              Learning React
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sx={{ width: { xs: '95%', md: '40%' } }}>
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={{ xs: 1, sm: 2 }}>
            <TimerBox count={days} label="DAY" />
            <Typography variant="h1"> : </Typography>
            <TimerBox count={hours} label="HOUR" />
            <Typography variant="h1"> : </Typography>
            <TimerBox count={minutes} label="MIN" />
            <Typography variant="h1"> : </Typography>
            <TimerBox count={seconds} label="SEC" />
          </Stack>
        </Grid>

        <Grid item>
          <Button onClick={GetCustomerid} variant="contained" sx={{ width: '20%' }}>
            two
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Counting;
