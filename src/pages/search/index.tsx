import { Search as SearchIcon } from "@mui/icons-material";
import { Card, CardContent, Grid, IconButton, InputAdornment, List, ListItem, ListItemText, OutlinedInput, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from '../../store';
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../interface/products/Product";
import { fetchProducts } from "../../store/products-slice";
import { useRouter } from "next/router";

interface SearchProps {
    onRefresh: () => void; 
}

const Search: React.FC<SearchProps> = ({ onRefresh }) => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const products = useSelector((state: RootState): Product[] => state.products.items);
    const status = useSelector((state: RootState) => state.products.status);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    useEffect(() => {
        setFilteredProducts(
            products.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [products, searchTerm]);

    const handleSearchChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    const goToProduct = (id: number) => {
        router.push(`/${id}`);
        setSearchTerm('');
        onRefresh();
      }

    return (
        <>
            <Grid 
                container
                marginBottom={4}
                sx={{ 
                    backgroundColor: 'white',
                    padding: 3,
                    position: 'sticky',
                    top: 0,
                    zIndex: 1000
                }}
            >
                <Grid item xs={12} md={12} display={'flex'} justifyContent={'center'}>
                <OutlinedInput
                    value={searchTerm}
                    onChange={handleSearchChange}
                    sx={{
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
                        width: { md: '60%', xs: 'auto' },
                        paddingRight: 3,
                        borderRadius: 10,
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                border: 'none',
                            },
                        },
                    }}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        edge="end"
                        >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                    }
                    placeholder="Search..."
                />
               </Grid>
               { searchTerm.length > 0 && 
                <Grid item xs={12} md={12} display={'flex'} justifyContent={'center'}>
                <Card sx={{ 
                     width: '60%',
                     borderRadius: 2,
                     position: 'fixed'
                 }}>
                 <CardContent>
                     <List>
                         {filteredProducts.map((product: any) => (
                             <ListItem 
                                sx={{
                                    backgroundColor: 'whitesmoke',
                                    borderRadius: 2,
                                    marginBottom: 2,
                                    cursor: 'pointer'
                                }} 
                                key={product.id}
                                onClick={() => goToProduct(product.id)}
                             >
                                 <ListItemText primary={product.title} />
                             </ListItem>
                         ))}
                     </List>
                 </CardContent>
                 </Card>
             </Grid>
               }
            </Grid>
        </>
    )
}

export default Search;