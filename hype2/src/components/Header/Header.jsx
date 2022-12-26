import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <Typography variant="stroked" color="inherit" component="div" sx={{
          '-webkit-text-stroke': '2px rgb(255, 253, 120)',
          fontSize: theme => theme.typography.h4.fontSize,
        }}>
          Nunchi Hype
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

