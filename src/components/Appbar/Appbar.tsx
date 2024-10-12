import React, { FC, useState } from 'react';

import cn from 'clsx';

import {
  AppbarStyles as s,
  Column,
  Container,
  Divider,
  KismetLogo,
  LinkStyled,
  NavMenu,
  Row,
  Typography,
} from 'src/components';
import { Resume } from 'src/components/Resume';
import { routes } from 'src/lib/routes/routes';
import { isPasswordProtected } from 'src/lib/utils';

type AppbarProps = {
  // eslint-disable-next-line react/no-unused-prop-types
  breadcrumbs?: boolean;
};

const Appbar: FC<AppbarProps> = () => {
  const [isPasswordAccepted, setIsPasswordAccepted] = useState(!isPasswordProtected);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  console.log(`password protected:${isPasswordProtected()}`);
  console.log(`password accepted:${isPasswordAccepted}`);

  const handleInputChange = event => {
    const { value } = event.target;
    setInputValue(value);

    // Validate if the input is not empty
    if (!value.trim()) {
      setError('This field is required.');
    } else {
      setError('');
    }
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputValue !== 'Kismet!') {
      setError('Password is incorrect.');
    } else if (!error) {
      setIsPasswordAccepted(true);
      document.body.classList.remove('password-protected');
      setTimeout(() => {
        return isPasswordProtected();
      }, 2000);
    }
  };

  const isMobile = () => {
    const width = document.body.offsetWidth.valueOf();
    return width < 680;
  };

  return (
    <header className={s.root}>
      <div className={cn(s['collage-carousel'], s['login-transition'])} />
      <Column className={cn(s.content, s['login-transition'])}>
        <div className={s.spacer} />
        <Row className={cn(s['password-wrap'], s['login-transition'])}>
          <Column className={s.logo}>
            <LinkStyled to={'/'}>
              <KismetLogo />
            </LinkStyled>
            <Column className={s.login} gap={1}>
              <Divider />
              <Typography variant={'overline'} color={'primary'} align={'right'}>
                Enter portfolio password for full access
              </Typography>
              <Row gap={1}>
                <input
                  aria-autocomplete={'none'}
                  type={'text'}
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                />
                <button type={'submit'} className={s.submit} onClick={handleSubmit}>
                  submit
                </button>
              </Row>
              {error && <Typography variant={'caption'}>{error}</Typography>}
            </Column>
          </Column>
          <Divider direction={isMobile() ? 'horizontal' : 'vertical'} />
          <Column className={cn(s.resume, s['login-transition'])}>
            <Resume inAppbar />
          </Column>
        </Row>
        <Container align={'end'} justify={'end'} className={s.nav}>
          <NavMenu routes={routes} variant={'appbar-nav'} />
        </Container>
      </Column>
    </header>
  );
};

export default Appbar;
