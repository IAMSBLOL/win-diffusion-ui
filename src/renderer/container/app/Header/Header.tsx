import {
  IMAGE_2_IMAGE,
  IMAGE_2_IMAGE_WIYH_MASKST,
  INPAINTING,
  OUTPAINTING,
  TEXR_2_IMAGE,
  COLLECTION
} from '@router/pathNames'
import { useMemo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Header.module.less'

type ItemProps = {
  to: string,
  text: string
}

const Item = (props: ItemProps) => {
  const { to, text } = props
  const { pathname } = useLocation()

  const getActive = () => {
    if (pathname === to) {
      return 'tab-active'
    } else {
      return ''
    }
  }
  return (
    <NavLink to={to} className={`mr-2 no-underline normal-case tab ${getActive()}`}>
      {text}
    </NavLink>
  )
}
const Header = () => {
  const paths = useMemo(
    () => {
      return [
        {
          to: TEXR_2_IMAGE,
          name: 'Text2Image'
        },
        {
          to: IMAGE_2_IMAGE,
          name: 'Image2Image'
        },
        {
          to: IMAGE_2_IMAGE_WIYH_MASKST,
          name: 'Image2ImageWithMask'
        },

        {
          to: INPAINTING,
          name: 'Inpainting'
        },
        {
          to: OUTPAINTING,
          name: 'Outpainting'
        },
        {
          to: COLLECTION,
          name: 'Collection'
        },

      ]
    }, []
  )

  const NavLinks = useMemo(() => {
    return paths.map((o, i) => {
      return (
        <Item to={o.to} text={o.name} key={i} />
      )
    })
  }, [paths])

  return (
    <div styleName="Header">
      <div className="bg-base-100 tabs tabs-boxed w-full shadow-md">
        {NavLinks}

      </div>
    </div>
  )
}

export default Header
