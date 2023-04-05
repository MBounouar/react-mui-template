import { Outlet } from 'react-router-dom';

// material-ui
import { Box, Toolbar } from '@mui/material';
import { MiniDrawer } from './mini-drawer';

// project import

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <MiniDrawer />
      <Box
        component="main"
        sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
