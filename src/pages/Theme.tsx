import React from 'react';

import { Column, Container, Divider, Icon, PageHeading, Row, Typography } from 'src/components';

const renderStarIcons = () => {
  return (
    <React.Fragment>
      <Icon name="starIcon" size="inherit" />
      <Icon name="starIcon" size="small" />
      <Icon name="starIcon" size="medium" />
      <Icon name="starIcon" size="large" />
      <Icon name="starIcon" size="x-large" />
    </React.Fragment>
  );
};

const renderTypographyNormal = () => {
  return (
    <React.Fragment>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <Typography variant="overline">Overline</Typography>
      <Typography variant="caption">Caption</Typography>
      <Typography variant="code">Code</Typography>
      <Typography variant="tooltip">Tooltip</Typography>
    </React.Fragment>
  );
};

const renderTypographyColors = () => {
  return (
    <React.Fragment>
      <Typography variant="h3" color="primary">
        Primary Color
      </Typography>
      <Typography variant="h3" color="secondary">
        Secondary Color
      </Typography>
      <Typography variant="h3" color="info">
        Info Color
      </Typography>
      <Typography variant="h3" color="success">
        Success Color
      </Typography>
      <Typography variant="h3" color="warning">
        Warning Color
      </Typography>
      <Typography variant="h3" color="error">
        Error Color
      </Typography>
    </React.Fragment>
  );
};

const renderTypographyAlign = () => {
  return (
    <React.Fragment>
      <Typography variant="h3" align="inherit">
        Inherit
      </Typography>
      <Typography variant="h3" align="left">
        Left
      </Typography>
      <Typography variant="h3" align="right">
        Right
      </Typography>
      <Typography variant="h3" align="center">
        Center
      </Typography>
      <Typography variant="h6" align="justify">
        Justify the Space Between Words Once Text Falls to Next Line
      </Typography>
      <Typography variant="h3" gutter>
        Gutter
      </Typography>
      <Typography variant="h3">No Gutter</Typography>
    </React.Fragment>
  );
};

function ThemePage() {
  return (
    <Column gap={4}>
      <PageHeading title="Theme Page" subtitle="Just a place to show off components" divider />

      <Column gap={1}>
        <Container>
          <Typography variant="h4">Icons</Typography>
        </Container>
        <Row gap={2}>
          <Container styled rounded variant="outline" direction="row" className="flex bottom">
            {renderStarIcons()}
          </Container>
        </Row>
      </Column>

      <Column gap={1}>
        <Container>
          <Typography variant="h4">Typography</Typography>
        </Container>
        <Row gap={2}>
          <Container styled rounded full variant="outline">
            {renderTypographyNormal()}
          </Container>
          <Container styled rounded full variant="outline">
            {renderTypographyColors()}
          </Container>
          <Container styled rounded full variant="outline">
            {renderTypographyAlign()}
          </Container>
        </Row>
      </Column>

      <Column gap={1}>
        <Container>
          <Typography variant="h4">Divider</Typography>
        </Container>
        <Row gap={2}>
          <Container styled rounded justify="center" align="center" variant="outline">
            <Divider direction="horizontal" spacing />
          </Container>
          <Container styled rounded justify="center" align="center" variant="outline">
            <Divider direction="vertical" spacing />
          </Container>
        </Row>
      </Column>

      <Column gap={1}>
        <Container>
          <Typography variant="h4">Styled Containers</Typography>
        </Container>
        <Row gap={2}>
          <Container styled rounded full>
            <Typography>Variant: None</Typography>
          </Container>
          <Container styled rounded full variant="outline">
            <Typography>Variant: Outline</Typography>
          </Container>
          <Container styled rounded full variant="darkish">
            <Typography>Variant: Darkish</Typography>
          </Container>
          <Container styled rounded full variant="green">
            <Typography>Variant: Green</Typography>
          </Container>
          <Container styled rounded full variant="blue">
            <Typography>Variant: Blue</Typography>
          </Container>
          <Container styled rounded full variant="purple">
            <Typography>Variant: Purple</Typography>
          </Container>
        </Row>
        <Row gap={2}>
          <Container styled full variant="darkish">
            <Typography>Rounded: False</Typography>
          </Container>
          <Container styled rounded full variant="darkish">
            <Typography>Rounded: True</Typography>
          </Container>
          <Container styled rounded="extra" full variant="darkish">
            <Typography>Rounded: Extra</Typography>
          </Container>
        </Row>
        <Row gap={2}>
          <Container styled full rounded elevation={0} variant="outline">
            <Typography>Elevation: 0</Typography>
          </Container>
          <Container styled full rounded elevation={5} variant="outline">
            <Typography>Elevation: 5</Typography>
          </Container>
          <Container styled full rounded elevation={9} variant="outline">
            <Typography>Elevation: 9</Typography>
          </Container>
          <Container styled full rounded elevation={13} variant="outline">
            <Typography>Elevation: 13</Typography>
          </Container>
          <Container styled full rounded elevation={17} variant="outline">
            <Typography>Elevation: 17</Typography>
          </Container>
          <Container styled full rounded elevation={21} variant="outline">
            <Typography>Elevation: 21</Typography>
          </Container>
          <Container styled full rounded elevation={24} variant="outline">
            <Typography>Elevation: 24</Typography>
          </Container>
        </Row>
        <Row gap={2}>
          <Container styled rounded full justify="start" variant="darkish">
            <Typography>Justify: Start</Typography>
          </Container>
          <Container styled rounded full justify="center" variant="darkish">
            <Typography>Justify: Center</Typography>
          </Container>
          <Container styled rounded full justify="end" variant="darkish">
            <Typography>Justify: End</Typography>
          </Container>
        </Row>
        <Row gap={2}>
          <Container styled rounded full align="start" variant="darkish">
            <Typography>Align: Start</Typography>
          </Container>
          <Container styled rounded full align="center" variant="darkish">
            <Typography>Align: Center</Typography>
          </Container>
          <Container styled rounded full align="end" variant="darkish">
            <Typography>Align: End</Typography>
          </Container>
        </Row>
      </Column>
    </Column>
  );
}

export default ThemePage;
