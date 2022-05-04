import React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Box from '@mui/material/Box';

interface fakeDBInterface {
  volume: string;
  upperRatio: string;
  Date: string;
}

interface fakeDBInterfaceArray extends Array<fakeDBInterface> {}

const fakeDB: fakeDBInterfaceArray = [
  {
    volume: '12.8K',
    upperRatio: '18.87%',
    Date: 'one day ago',
  },
  {
    volume: '15.6K',
    upperRatio: '13.33%',
    Date: 'last week',
  },

  {
    volume: '22.5K',
    upperRatio: '29.31%',
    Date: 'last month',
  },
  {
    volume: '79.2K',
    upperRatio: '52.31%',
    Date: 'last week',
  },
  {
    volume: '49.2K',
    upperRatio: '12.31%',
    Date: 'two day ago',
  },
  {
    volume: '29.2K',
    upperRatio: '33.31%',
    Date: 'two day ago',
  },
  {
    volume: '89.2K',
    upperRatio: '42.31%',
    Date: 'three day ago',
  },
];

function Card(): JSX.Element {
  return (
    <>
      {fakeDB.map((result) => {
        return (
          <Box
            sx={{
              boxSizing: 'border-box',
              bgcolor: 'background.paper',
              boxShadow: 3,
              borderRadius: 1,
              p: 3,
              minWidth: 300,
              marginBottom: 5,
            }}
          >
            <Box sx={{ color: 'text.secondary', marginBottom: 1 }}>Sessions</Box>
            <Box
              sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium', marginBottom: 2 }}
            >
              {result.volume}
            </Box>
            <Box
              component={TrendingUpIcon}
              sx={{ color: 'success.dark', fontSize: 16, verticalAlign: 'sub' }}
            />
            <Box
              sx={{
                color: 'success.dark',
                display: 'inline',
                fontWeight: 'medium',
                mx: 0.5,
              }}
            >
              {result.upperRatio}
            </Box>
            <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 12 }}>
              vs. {result.Date}
            </Box>
          </Box>
        );
      })}
    </>
  );
}

export default Card;
