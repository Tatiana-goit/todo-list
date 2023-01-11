import { DateTime } from 'luxon';
import {
  List,
  ListItem,
  Checkbox,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  CardHeader,
} from '@mui/material';
import PropTypes from 'prop-types';

export default function CardView({ todoLists }) {
  return (
    <Grid container spacing={3} rowSpacing={5} p={5}>
      {todoLists.map(({ id, name, todos }) => {
        return (
          <Grid item key={id} xs={12} sm={6} md={4} >
            <Card sx={{ height: '300px' }}>
              <CardHeader
                sx={{ bgcolor: 'background.secondary'}}
                title={
                  <Typography
                    sx={{ color: 'text.primary', fontSize: 22, padding: '14px' }}
                  >
                    {name}
                  </Typography>
                }
              />
              <CardContent sx={{ height: '210px', overflowY: 'scroll' }}>
                <List>
                  {todos.map(({ id, text, isDone, createdDate }) => {
                    const date = DateTime.fromFormat(createdDate, 'dd MMM yyyy, T').toFormat(
                      'dd MMM'
                    );
                    return (
                      <ListItem
                        key={id}
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Checkbox edge="start" checked={isDone} disableRipple />
                          <Typography sx={{ fontSize: 14}}>{text}</Typography>
                        </Box>
                        <Box
                          component="span"
                          sx={{ fontSize: 14, width: 60, marginLeft: 2 }}
                        >
                          {date}
                        </Box>
                      </ListItem>
                    );
                  })}
                </List>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

CardView.propTypes = {
  todoLists: PropTypes.arrayOf(
    PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          todos: PropTypes.array
        }),
  )
};


// errorList: PropTypes.arrayOf(
//   PropTypes.shape({
//     param: PropTypes.string,
//     msg: PropTypes.string,
//   }),
// ),
// id, name, todos 