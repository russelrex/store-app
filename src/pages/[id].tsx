import { useRouter } from 'next/router';
import Search from './search';
import { Box, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { useEffect } from 'react';
import { fetchProductById } from '../store/products-slice';
import { Product } from '../interface/products/Product';
import Review from './review';
import Filter from './filter';

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const dispatch = useDispatch<AppDispatch>();
    const product = useSelector((state: RootState): Product | null => state.products.selectedProduct);
    const status = useSelector((state: RootState) => state.products.selectedProductStatus);

  useEffect(() => {
    if (status === 'idle' && id) {
        dispatch(fetchProductById(id as string));
    }
  }, [id, dispatch, status]);

  const handleRefresh = async () => {
    await dispatch(fetchProductById(id as string));
};

    return (
        <>
        <Search onRefresh={handleRefresh} />
        <Grid container spacing={2}>
            {/* <Grid item md={3} xs={12}>
                <Filter />
            </Grid> */}
            <Grid item md={12} display={'flex'} justifyContent={'center'}>
                <Box padding={2} width={'80%'}>
                    <Grid container spacing={2}>
                        {status === 'loading' && <Typography variant="h6">Loading...</Typography>}
                        {product ? (
                            <Grid item md={12}>
                                <Card sx={{
                                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
                                    borderRadius: 10,
                                    display: 'grid',
                                    flexDirection: 'column',
                                }}>
                                    <Grid container>
                                        <Grid item md={3} xs={12}>
                                            <CardMedia
                                                sx={{
                                                    height: 200,
                                                    backgroundSize: 'contain'
                                                }}
                                                image={product.image}
                                                title="green iguana"
                                            />
                                        </Grid>
                                        <Grid item md={9} xs={12}>
                                            <CardContent>
                                            <Typography variant="h5" fontWeight="bold" mb={1}>
                                                {product.title}
                                            </Typography>
                                            <Typography variant="h5" fontWeight="bold" mb={2}>
                                                ${product.price.toFixed(2)}
                                            </Typography>
                                            
                                            <Typography fontWeight="bold">
                                                Brand
                                            </Typography>
                                            <Typography mb={1}>
                                                {product.brand}
                                            </Typography>
                                            
                                            <Typography fontWeight="bold">
                                                Category
                                            </Typography>
                                            <Typography mb={1}>
                                                {product.category}
                                            </Typography>
                                            
                                            <Typography fontWeight="bold">
                                                Model
                                            </Typography>
                                            <Typography mb={1}>
                                                {product.model}
                                            </Typography>
                                            
                                            <Typography fontWeight="bold">
                                                Color
                                            </Typography>
                                            <Typography mb={1}>
                                                {product.color}
                                            </Typography>
                                            
                                            <Typography fontWeight="bold">
                                                Description
                                            </Typography>
                                            <Typography mb={1}>
                                                {product.description}
                                            </Typography>
                                            </CardContent>
                                        </Grid>
                                        <Grid item md={12} m={4}>
                                            <Review />
                                        </Grid>
                                    </Grid>
                                    </Card>
                            </Grid>
                        ) : ''}
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    </>
    );
};

export default ProductPage;