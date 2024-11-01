import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import cities from "../assets/data.json";
import TourCard from "../components/TourCard";
import React from "react";
const Home = () => {
    return (
        <Container sx={{ marginY: 5 }}>
            {cities.map((city) => (
                <React.Fragment key={city.id}>
                    <Typography variant="h4" component="h2" marginTop={3}>
                        {city.name}
                    </Typography>
                    <Grid container spacing={5}>
                        {city.tours.map((tour) => (
                            <TourCard tour={tour} key={tour.id} />
                        ))}
                    </Grid>
                </React.Fragment>
            ))}
        </Container>
    );
};

export default Home;
