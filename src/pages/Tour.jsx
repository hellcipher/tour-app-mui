import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cities from "../assets/data.json";
import QuiltedImageList from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";
import Paper from '@mui/material/Paper';
import BottomNavigation from "@mui/material/BottomNavigation";
import BasicModal from "../components/Modal";

const Tour = () => {
    const { id } = useParams();
    const [tour, setTour] = useState(null);

    useEffect(() => {
        const tourData = cities.flatMap((city) => city.tours).find((t) => id == t.id);
        console.log(tourData);
        setTour(tourData);
    }, []);
    return (
        <Container>
            {!tour ? (
                <Typography variant="h6">Loading tour details...</Typography>
            ) : (
                <>
                    <Typography variant="h3" component="h1" marginTop={3}>
                        {tour.name}
                    </Typography>
                    <Box marginTop={3} sx={{ display: "flex" }}>
                        <img src={tour.image} alt={tour.name} height={325} />
                        <QuiltedImageList />
                    </Box>
                    <Box>
                        <Typography variant="h6" component="h4" marginTop={3}>
                            About this ticket
                        </Typography>
                        <Typography variant="paragraph" component="p">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, odio voluptates. Facere
                            quod porro fugiat autem! Officia ut tempora molestiae nulla doloremque dolore aut,
                            voluptates, ullam velit, ducimus ad perspiciatis deleniti obcaecati amet totam asperiores
                            consequuntur accusantium ipsum voluptate? Laborum!
                        </Typography>
                    </Box>
                    <Box marginBottom={10}>
                        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
                            Frequently asked questions
                        </Typography>
                        <CustomizedAccordions />
                    </Box>
                    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
                        <BottomNavigation
                        >
                            <BasicModal/>
                        </BottomNavigation>
                    </Paper>
                </>
            )}
        </Container>
    );
};

export default Tour;
