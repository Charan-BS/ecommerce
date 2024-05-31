import React, { useState, useEffect } from "react";
import Alert from '@mui/material/Alert';
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, TextField } from "@mui/material";

function AllProducts() {

  const [productData, setProductData] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((res) => {
      setProductData(res.data.products)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  let filtered =
    search ? productData.filter((i) =>
      i.title.toLowerCase().includes(search.toLowerCase())
    ) : productData;

  console.log(search)

  return (
    <div style={{ padding: 10 }}>
      <Box
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField label={"Search products here"}
          onChange={(data) => setSearch(data.target.value)}
        />
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          "& > :not(style)": {},
        }}
      >

        {
          filtered.length > 0 ?
            filtered.map((p) => (
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  width="200"
                  image={p.thumbnail}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {p.title}
                  </Typography>
                  <Typography gutterBottom variant="body2" color="text.secondary">
                    {p.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {p.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography variant="h5">{p.price}</Typography>
                  <Typography
                    variant="h5"
                    style={{ textAlign: "end", width: "100%" }}
                  >
                    brand
                  </Typography>
                </CardActions>
              </Card>
            )) : <Box>
              <Alert severity="warning">Item not found kaka search in amazon</Alert>
            </Box>
        }

      </Grid>
    </div>
  );
}

export default AllProducts;
