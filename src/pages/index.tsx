import { Grid, Typography } from '@mui/material';
import Products from './products';
import Search from './search';

const Home = () => {
    const handleRefresh = () => {
        console.log('Refresh triggered');
    };
    return (
        <>
            <Search  onRefresh={handleRefresh}/>
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