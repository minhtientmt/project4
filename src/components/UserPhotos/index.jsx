import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

const UserPhotos = ({ photos }) => {
  return (
    <div className="user-photos">
      <Typography variant="h4">User Photos</Typography>
      {photos.map(photo => (
        <Card key={photo.id} sx={{ maxWidth: 345 }}>
          <CardHeader title={`Created At: ${photo.createdAt}`} />
          <CardMedia
            component="img"
            height="194"
            image={photo.url}
            alt="user photo"
          />
          <CardContent>
            {photo.comments.map(comment => (
              <div key={comment.id}>
                <Typography variant="body1">{`Commented At: ${comment.createdAt}`}</Typography>
                <Typography variant="body1">{`User: ${comment.user}`}</Typography>
                <Typography variant="body1">{`Text: ${comment.text}`}</Typography>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UserPhotos;