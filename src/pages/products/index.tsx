import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/products-slice';
import { AppDispatch, RootState } from '../../store';
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Link, Typography } from '@mui/material';
import { Product } from '../../interface/products/Product';
import { useRouter } from 'next/router';

const MAX_LENGTH = 50;

const Products = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const products = useSelector((state: RootState): Product[] => state.products.items);
    const status = useSelector((state: RootState) => state.products.status);
    const [expandedProductIds, setExpandedProductIds] = useState<Set<number>>(new Set());
    const toggleExpanded = (productId: number) => {
        setExpandedProductIds((prev) => {
          const newSet = new Set(prev);
          if (newSet.has(productId)) {
            newSet.delete(productId);
          } else {
            newSet.add(productId);
          }
          return newSet;
        });
    };

    useEffect(() => {
    if (status === 'idle') {
        dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const goToProduct = (id: number) => {
    router.push(`/${id}`);
  }

    return (
        <>
        <Box padding={2}>
            <Grid container spacing={2}>
                {status === 'loading' && <Typography variant="h6">Loading...</Typography>}
                {products.map((product: Product) => (
                    <Grid item md={3} xs={6} key={product.id}>
                        <Card sx={{
                            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
                            borderRadius: 10,
                            height: expandedProductIds.has(product.id) ? 'auto' : { xs: 415, md: 380 },
                            display: 'grid',
                            flexDirection: 'column',
                            cursor: 'pointer'
                        }}
                        onClick={() => goToProduct(product.id)}
                        >
                        <CardHeader title={ product.category.toUpperCase() }>
                        </CardHeader>
                            <CardMedia
                                sx={{ 
                                    height: 140,
                                    backgroundSize: 'contain'
                                }}
                                image={product.image}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography>
                                { expandedProductIds.has(product.id)
                                    ? product.description
                                    : truncatedDescription(product.description)}
                                { product.description.length > MAX_LENGTH && (
                                <Link
                                    component="button"
                                    variant="body2"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        toggleExpanded(product.id);
                                    }}
                                    sx={{ ml: 1 }}
                                >
                                    { expandedProductIds.has(product.id) ? 'See less' : 'See more' }
                                </Link>
                                )}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ paddingRight: '25px', justifyContent: 'right' }}>
                                <Typography variant="h6">${product.price}</Typography>
                            </CardActions>
                            </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
        </>
    )
}

const truncatedDescription = (description: string) => {
    return description.length > MAX_LENGTH ? 
    description.substring(0, MAX_LENGTH) + '...' : 
    description;
}

export default Products;