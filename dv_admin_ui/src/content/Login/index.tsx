import { Box, Container, Card } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import Login from 'src/content/Login/loginForm';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Overview() {
  return (
    <OverviewWrapper>
      <Helmet>
        <title>MEDLINK LOGIN</title>
      </Helmet>
      <Container>
        <Card sx={{mx:5, my:10, borderRadius:5 }}>
          <Login></Login>
        </Card>
      </Container>
    </OverviewWrapper>
  );
}

export default Overview;
