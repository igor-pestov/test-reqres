import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import styles from "./styles/index.module.scss";

const CardItem = ({ data, setOpen }) => {
  return (
    <Card className={styles.card} onClick={() => setOpen(data.id)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.avatar}
          alt="avatar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.first_name} {data.last_name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardItem;
