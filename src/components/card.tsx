import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import dayjs from 'dayjs';
import { Skeleton } from '@mui/material';

interface fakeDBInterface {
  id: number;
  volume: string;
  upperRatio: string;
  Date: string;
}

interface fakeDBInterfaceArray extends Array<fakeDBInterface> {}
let date = dayjs();

const fakeDB: fakeDBInterfaceArray = [
  {
    id: 1,
    volume: '12.8K',
    upperRatio: '18.87%',
    Date: 'one day ago',
  },
  {
    id: 2,
    volume: '15.6K',
    upperRatio: '13.33%',
    Date: 'last week',
  },

  {
    id: 3,
    volume: '22.5K',
    upperRatio: '29.31%',
    Date: 'last month',
  },
  {
    id: 4,
    volume: '79.2K',
    upperRatio: '52.31%',
    Date: 'last week',
  },
  {
    id: 5,
    volume: '49.2K',
    upperRatio: '12.31%',
    Date: 'two day ago',
  },
  {
    id: 6,
    volume: '29.2K',
    upperRatio: '33.31%',
    Date: 'two day ago',
  },
  {
    id: 7,
    volume: '89.2K',
    upperRatio: '42.31%',
    Date: 'three day ago',
  },
];

const StyledBox = styled(Box)`
  box-shadow: 2px 4px 6px gray;
  transition: 0.3s;
  &:hover {
    background-color: rgba(220, 220, 220, 0.5);
    cursor: pointer;
    transform: translateY(-3px);
  }
`;

function Card(): JSX.Element {
  return (
    <>
      {fakeDB.map((result) => {
        return (
          <StyledBox
            key={result.id}
            sx={{
              boxSizing: 'border-box',
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
            <Box
              sx={{
                color: 'text.secondary',
                display: 'block',
                fontSize: 12,
                marginTop: 1,
                marginBottom: 1,
              }}
            >
              {`${date.get('year')}년 ${date.get('month') + 1}월 ${date.get('day') + 1}일`}
            </Box>

            <Skeleton variant={'text'} />
            <Skeleton variant={'text'} sx={{ marginBottom: 1 }} />
            <Skeleton variant={'circular'} width={40} height={40} sx={{ marginBottom: 1 }} />
            <Skeleton variant={'rectangular'} height={118} sx={{ marginBottom: 1 }} />
            <Skeleton variant={'text'} />
          </StyledBox>
        );
      })}
    </>
  );
}

export default Card;
