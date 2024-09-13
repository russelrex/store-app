import { Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { Face, Face2, Face3, Face4 } from '@mui/icons-material';

const Review = () => {
    return (
        <>
            <Typography fontWeight="bold" mb={1}>
                Reviews
            </Typography>
            <Grid container spacing={3}>
                <Grid item md={3} xs={12}>
                    <Card sx={{
                        backgroundColor: 'floralwhite',
                        height: '100%'
                     }}>
                        <CardContent>
                            <Face fontSize='large' />
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Rating: ★★★☆☆ (3/5)
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Review:
                            </Typography>
                            <Typography variant="body2" fontStyle="italic">
                                &quot;This laptop has exceeded my expectations in terms of performance.
                                The speed is incredible, and it handles multiple applications smoothly.
                                The build quality feels premium, and the battery life is more than adequate
                                for a full day of work. The only downside is the slightly dim display when used
                                outdoors.&quot;
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Card sx={{
                        backgroundColor: 'floralwhite',
                        height: '100%'
                     }}>
                        <CardContent>
                            <Face2 fontSize='large' />
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Rating: ★★★★☆ (4/5)
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Review:
                            </Typography>
                            <Typography variant="body2" fontStyle="italic">
                                &quot;This laptop has exceeded my expectations in terms of performance.
                                The speed is incredible, and it handles multiple applications smoothly.
                                The build quality feels premium, and the battery life is more than adequate
                                for a full day of work. The only downside is the slightly dim display when used
                                outdoors.&quot;
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Card sx={{
                        backgroundColor: 'floralwhite',
                        height: '100%'
                     }}>
                        <CardContent>
                            <Face3 fontSize='large' />
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Rating: ★★★★★ (5/5)
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Review:
                            </Typography>
                            <Typography variant="body2" fontStyle="italic">
                                &quot;This laptop has exceeded my expectations in terms of performance.
                                The speed is incredible, and it handles multiple applications smoothly.
                                The build quality feels premium, and the battery life is more than adequate
                                for a full day of work. The only downside is the slightly dim display when used
                                outdoors.&quot;
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Card sx={{
                        backgroundColor: 'floralwhite',
                        height: '100%'
                     }}>
                        <CardContent>
                            <Face4 fontSize='large' />
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Rating: ★★☆☆☆ (2/5)
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Review:
                            </Typography>
                            <Typography variant="body2" fontStyle="italic">
                                &quot;These running shoes are perfect for both casual 
                                jogging and more intense runs. They provide excellent s
                                upport and cushioning, reducing the impact on my joints.
                                The design is sleek, and they fit true to size. However,
                                they took a little time to break in, which is why I&apos;m 
                                giving them 4.5 stars.&quot;
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Review;