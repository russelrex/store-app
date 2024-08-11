import { Grid, Typography } from '@mui/material';

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
        </>
    )
}

export default Home;