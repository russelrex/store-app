import { Grid, Typography } from '@mui/material';
import Products from './products';
import Search from './search';

const Home = () => {
    return (
        <>
            <Search />
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