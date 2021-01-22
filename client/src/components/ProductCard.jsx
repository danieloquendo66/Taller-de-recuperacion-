import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
    "&:hover": {
      border: "1px solid",
      boxShadow: "1px 2px 8px 6px",
    },
  },
  media: {
    height: 140,
  },
});

export const ProductCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            Titulo
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            Precio
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            Condicion
          </Typography>
          <Typography
            variant="body2"
            color="primary"
            component="p"
            align="center"
          >
            Stock
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
