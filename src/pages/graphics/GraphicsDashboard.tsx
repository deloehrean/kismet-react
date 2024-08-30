import React from 'react';

import cn from 'clsx';

import tee3 from 'src/assets/images/tees/alucard-black-tee.png';
import tee1 from 'src/assets/images/tees/royden-spike-tee.png';
import tee4 from 'src/assets/images/tees/skin-thread-tv-tee.png';
import tee2 from 'src/assets/images/tees/weakend-bronto-tee.png';
import tee5 from 'src/assets/images/tees/whiv-robot-tee.png';
import { Column, Container, Divider, LinkStyled, Row, Typography } from 'src/components';
import { GraphicsPageStyles as s } from 'src/pages';
import albumStyles from 'src/pages/graphics/albums/AlbumsPage.module.scss';
import AlucardAlbum from 'src/pages/graphics/albums/AlucardAlbum';
import AndrewLoehrAlbum from 'src/pages/graphics/albums/AndrewLoehrAlbum';
import AsecondtoolateAlbum from 'src/pages/graphics/albums/AsecondtoolateAlbum';
import ElephantomAlbum from 'src/pages/graphics/albums/ElephantomAlbum';
import RoydenAlbum from 'src/pages/graphics/albums/RoydenAlbum';
import teesStyles from 'src/pages/graphics/tees/TeesPage.module.scss';

function GraphicsDashboard() {
  return (
    <Column gap={4}>
      <Typography variant={'body1'}>
        Here you will find a small selection of the best items from each child category displayed.
        They will have links to go to the full category page.
      </Typography>
      <Row gap={2} breakpoint={'md'}>
        <Container styled variant={'darkish'} rounded={'extra'} full elevation={8}>
          <Column gap={2}>
            <Column>
              <Typography variant={'h6'}>Album Artwork</Typography>
              <Typography variant={'overline'} color={'secondary'}>
                CD, Vinyl, Cassette
              </Typography>
            </Column>
            <Divider />
            <Typography variant={'body2'} gutter>
              Since 2000, I have been designing album artwork for bands from all over the country.
              It allows me to showcase both digital and illustrative talents and really stretch the
              imagination.
            </Typography>
            <Row className={albumStyles['content-frame-container']}>
              <div className={cn(albumStyles['album-group'])}>
                <div className={albumStyles['active-reset']}>
                  <AlucardAlbum />
                </div>
              </div>
              <div className={cn(albumStyles['album-group'])}>
                <div className={albumStyles['active-reset']}>
                  <ElephantomAlbum />
                </div>
              </div>
              <div className={cn(albumStyles['album-group'])}>
                <div className={albumStyles['active-reset']}>
                  <AsecondtoolateAlbum />
                </div>
              </div>
              <div className={cn(albumStyles['album-group'])}>
                <div className={albumStyles['active-reset']}>
                  <AndrewLoehrAlbum />
                </div>
              </div>
              <div className={cn(albumStyles['album-group'])}>
                <div className={albumStyles['active-reset']}>
                  <RoydenAlbum />
                </div>
              </div>
            </Row>
            <LinkStyled className={s.button} to={'/graphics/albums'}>
              View All
            </LinkStyled>
          </Column>
        </Container>
        <Container styled variant={'darkish'} rounded={'extra'} full elevation={8}>
          <Column gap={2}>
            <Column>
              <Typography variant={'h6'}>Tee Shirt Designs</Typography>
              <Typography variant={'overline'} color={'secondary'}>
                From concept to wearable
              </Typography>
            </Column>
            <Divider />
            <Typography variant={'body2'} gutter>
              I have designed over 100 tee shirts for multiple bands, companies, corporate outings,
              and events... mostly bands. Getting to work with artists on how they want to brand
              themselves has been a highlight of my career.
            </Typography>
            <Row className={teesStyles['content-frame-container']}>
              <div className={cn(teesStyles['single-tee'], teesStyles.rotateLeft)}>
                <img src={tee1} />
              </div>
              <div className={cn(teesStyles['single-tee'], teesStyles.rotateLeft)}>
                <img src={tee2} />
              </div>
              <div className={cn(teesStyles['single-tee'], teesStyles.rotateLeft)}>
                <img src={tee3} />
              </div>
              <div className={cn(teesStyles['single-tee'], teesStyles.rotateLeft)}>
                <img src={tee4} />
              </div>
              <div className={cn(teesStyles['single-tee'], teesStyles.rotateLeft)}>
                <img src={tee5} />
              </div>
            </Row>
            <LinkStyled className={s.button} to={'/graphics/tees'}>
              View All
            </LinkStyled>
          </Column>
        </Container>
      </Row>
    </Column>
  );
}

export default GraphicsDashboard;
