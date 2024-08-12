import { Grid } from '@mui/material';
import Products from './products';
import Search from './search';
import Filter from './filter';

const Home = () => {
    const handleRefresh = () => {
    };
    return (
        <>
            <Search onRefresh={handleRefresh}/>
            <Grid container spacing={2}>
                <Grid item md={3} xs={12}>
                    <Filter />
                </Grid>
                <Grid item md={9}>
                    <Products />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;