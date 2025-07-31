// MUI Material

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// Loading Page

export default function Loading() {
    return (
        <Container maxWidth="sm">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="70vh"
                textAlign="center"
            >
                <CircularProgress size={60} thickness={5} color="primary" />
                <Typography variant="h6" mt={3}>
                    Loading your content...
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                    Please wait a moment.
                </Typography>
            </Box>
        </Container>
    );
}