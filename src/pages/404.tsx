import { Column, Container, PageHeading, Typography } from 'src/components';

function FourOhFourPage() {
  return (
    <Column gap={4}>
      <PageHeading title={'404'} subtitle={'Well, well, well...'} divider />
      <Container>
        <Typography variant={'body1'}>
          Looks like you stepped out of line. Go home, you're drunk.
        </Typography>
      </Container>
    </Column>
  );
}

export default FourOhFourPage;
