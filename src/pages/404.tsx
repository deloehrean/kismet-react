import { PageHeading, Typography } from 'src/components';

function FourOhFourPage() {
  return (
    <>
      <PageHeading title={'404'} subtitle={'Well, well, well...'} divider />
      <Typography variant={'body1'}>
        Looks like you stepped out of line. Go home, you're drunk.
      </Typography>
    </>
  );
}

export default FourOhFourPage;
