import { Grid, Typography } from '@mui/material';
import Products from './products';

const Home = () => {
    return (
        <>
            <Grid container marginBottom={4} justifyContent={'center'} textAlign={'center'}>
                <Grid item md={3}>
                    <Typography variant="h5" gutterBottom>
                        Products
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography variant="h5" gutterBottom>
                        Products
                    </Typography>
                </Grid>
                <Grid item md={3}>
                    <Typography variant="h5" gutterBottom>
                        Products
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item md={3}>
                    Filter Component
                </Grid>
                <Grid item md={9}>
                    <Products />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;