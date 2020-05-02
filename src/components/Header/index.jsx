import React from 'react'

import Logo from 'icons/Logo'
import NotificationIcon from 'icons/Notification'
import ConfigurationIcon from 'icons/Configuration'
import UserIcon from 'icons/User'

import items from './items'
import * as S from './styles'

const Header = () => (
  <S.Header>
    <S.HeaderContainer>
      <S.HeaderLogo>
        <Logo />
      </S.HeaderLogo>

      <S.HeaderList>
        {items.map((item) => {
          const Icon = item.icon
          return (
            <S.HeaderListItem key={item.name}>
              <Icon />
              {item.name}
            </S.HeaderListItem>
          )
        })}
      </S.HeaderList>

      <S.HeaderSettings>
        <NotificationIcon />
        <ConfigurationIcon />

        <S.HeaderSettingsUser>
          <S.HeaderSettingsUserIcon>
            <UserIcon />
          </S.HeaderSettingsUserIcon>

          <p>João P.</p>
        </S.HeaderSettingsUser>
      </S.HeaderSettings>
    </S.HeaderContainer>
  </S.Header>
)

export default Header
