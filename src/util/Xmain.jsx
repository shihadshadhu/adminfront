import { CircularProgress, Container, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Buffer } from 'buffer';

const Moviedetails = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3005/view")
            .then(response => {
                setBooks(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching movie data:', err);
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography variant="h6" color="error">Error: {error.message}</Typography>
            </div>
        );
    }

    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom style={{ margin: '20px 0' }}>CHILLFLIX</Typography>
            <Grid container spacing={3}>
                {books.map((books, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', height: '100%' }}>
                        {books.selectedimage && (
                                <img src={`data:image/jpeg;base64,${Buffer.from(books.selectedimage.data).toString('base64')}`} style={{ marginTop: '20px', maxWidth: '100%' }} alt="Movie" />
                            )}
                            <Typography variant="subtitle1" gutterBottom><strong>{books.Category}</strong></Typography>
                            <Typography variant="body2" gutterBottom><strong>Language:</strong> {books.Subcategory}</Typography>
                            <Typography variant="body2" gutterBottom><strong>Genre:</strong> {books.Description}</Typography>
                            <Typography variant="body2" gutterBottom><strong>Description:</strong>{books.Price}</Typography>

                            
                        </Paper>    
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Moviedetails;