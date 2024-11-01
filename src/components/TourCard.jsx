import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccessTime from "@mui/icons-material/AccessTime";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";

const TourCard = ({ tour }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/${tour.id}`)
    }
    return (
        <Grid item xs={4} md={3}>
            <Paper elevation={3} onClick={() => handleClick()}>
                <img className="img" src={tour.image} alt="" />
                <Box sx={{paddingX:1}}>
                    <Typography variant="subtitle1" component="h2">
                        {tour.name}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <AccessTime sx={{ width: 12.5 }} />
                        <Typography variant="body2" component="p" marginLeft={0.5}>
                            {tour.duration} Hours
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
                        <Rating name="tour-rating" size="small" defaultValue={4.5} precision={0.5} readOnly />
                        <Typography variant="body2" marginLeft={0.5}>
                            {tour.rating}
                        </Typography>
                        <Typography variant="body3" marginLeft={0.5}>
                            {`(${tour.numberOfReviews} reviews)`}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="h2" marginTop={0}>{`From C $${tour.price}.00`}</Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
};

export default TourCard;
