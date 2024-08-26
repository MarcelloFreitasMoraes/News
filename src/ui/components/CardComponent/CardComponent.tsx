import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {
  title: string
  labelButton: string
  description?: string
  img: string
  alt: string
  action?: () => void
}

const CardComponent: React.FC<Props> = ({title, description, img, alt, action, labelButton }) => {
  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title={alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{textDecoration: 'upercase'}} onClick={action}>{labelButton}</Button>
      </CardActions>
    </Card>
  );
}

export default CardComponent;
