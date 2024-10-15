import React, { useState } from 'react';

import cn from 'clsx';

import {
  AppbarStyles as s,
  Column,
  Container,
  Divider,
  KismetLogo,
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
  color: string;
};

const Appbar = ({ color }: AppbarProps) => {
  const [isPasswordAccepted, setIsPasswordAccepted] = useState(!isPasswordProtected);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = event => {
    const { value } = event.target;
    setInputValue(value);

    // Validate if the input is not empty
    if (!value.trim()) {
      setError('This field is required');
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
    if (inputValue === '') {
      setError('Password required');
    } else if (inputValue !== 'Kismet123!') {
      setError('Password is incorrect');
    } else {
      setIsPasswordAccepted(true);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      document.body.classList.remove('password-protected');
      setInterval(() => {
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
      <Column className={cn(s.content)}>
        <div className={cn(s.spacer, s[`${color}`])} />
        <Row className={cn(s['password-wrap'], s['login-transition'])}>
          <Column className={cn(s.logo, s['login-transition'])}>
            <KismetLogo />
            <Column className={s.login} gap={2}>
              <Divider />
              <Typography
                variant={'overline'}
                color={'primary'}
                align={isMobile() ? 'center' : 'right'}
              >
                Enter password for full access
                <br /> which can be found by downloading resume
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
          <Container direction={'column'} className={s.divider}>
            <Divider direction={isMobile() ? 'horizontal' : 'vertical'} />
          </Container>
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
