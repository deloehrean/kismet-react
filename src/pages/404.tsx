import { Column, Container, LinkStyled, PageHeading, Typography } from 'src/components';

function FourOhFourPage() {
  return (
    <Column gap={4}>
      <PageHeading title={'404'} subtitle={'Page not found'} divider />
      <Container direction={'column'} gap={2}>
        <Typography variant={'body1'}>
          That page doesn&apos;t exist. Head back home and try again.
        </Typography>
        <LinkStyled to={'/'}>Back to home &rarr;</LinkStyled>
      </Container>
    </Column>
  );
}

export default FourOhFourPage;
