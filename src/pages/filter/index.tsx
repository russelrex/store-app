import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { AppDispatch, RootState } from '../../store';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts, fetchProductCategories, fetchProductsByCategory } from "../../store/products-slice";

const Filter = () => {
    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector((state: RootState) => state.products.categories);
    const status = useSelector((state: RootState) => state.products.status);
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProductCategories());
        }
      }, [status, dispatch]);

    const handleCategoryChange = (event: any) => {
        const category = event.target.value as string;
        setSelectedCategory(category);
        if (category === '') {
            dispatch(fetchProducts());
            return;
        }

        dispatch(fetchProductsByCategory(category));
    };
    return (
    <>
           <Grid container>
            <Grid item xs={12} m={4}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        label="Category"
                        sx={{ backgroundColor: 'white' }}
                    >
                        <MenuItem value="">All</MenuItem>
                        {categories.map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    </>
    )
}

export default Filter;