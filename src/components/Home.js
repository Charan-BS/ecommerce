import React from 'react';
import { Container, Typography, Paper, Grid, Button, Card, CardContent, CardMedia, Box, AppBar, Toolbar, Link } from '@mui/material';

import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  hero: {
    padding: '50px 0',
    background: 'url(https://via.placeholder.com/1920x600) center/cover',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
  },
  section: {
    padding: '40px 0',
  },
  productCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    height: 140,
  },
  cardContent: {
    flexGrow: 1,
  },
  promoSection: {
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    marginTop: '20px',
  },
  footer: {
    padding: '20px 0',
    textAlign: 'center',
    backgroundColor: '#3f51b5',
    color: 'white',
    marginTop: '20px',
  },
  appBar: {
    backgroundColor: '#3f51b5',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navLink: {
    color: 'white',
    // marginLeft: theme.spacing(2),
  },
}));

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a great product.',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is another great product.',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is yet another great product.',
    image: 'https://via.placeholder.com/200',
  },
];

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      {/* <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Shopping Cart</Typography>
          <div>
            <Link href="/" className={classes.navLink}>
              Home
            </Link>
            <Link href="/about" className={classes.navLink}>
              About
            </Link>
            <Link href="/contact" className={classes.navLink}>
              Contact
            </Link>
          </div>
        </Toolbar>
      </AppBar> */}

      <Box className={classes.hero}>
        <div className={classes.heroOverlay} />
        <Container className={classes.heroContent}>
          <Typography variant="h2" component="h1">
            Welcome to Our Shopping Cart
          </Typography>
          <Typography variant="h5" component="p" style={{ marginTop: '20px' }}>
            Find the best products at unbeatable prices!
          </Typography>
          <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
            Shop Now
          </Button>
        </Container>
      </Box>

      <Container className={classes.section}>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card className={classes.productCard}>
                <CardMedia
                  className={classes.cardMedia}
                  image={product.image}
                  title={product.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {product.description}
                  </Typography>
                </CardContent>
                <Box textAlign="center" paddingBottom={2}>
                  <Button variant="contained" color="primary">
                    Add to Cart
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container className={classes.promoSection}>
        <Typography variant="h5" component="h2">
          Special Offers
        </Typography>
        <Typography variant="body1" component="p" style={{ marginTop: '10px' }}>
          Sign up for our newsletter to receive special discounts and updates!
        </Typography>
        <Button variant="contained" color="secondary" style={{ marginTop: '10px' }}>
          Sign Up
        </Button>
      </Container>

      <Box className={classes.footer}>
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} Shopping Cart. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
};



export default Home