import bs from 'react-icons/bs'
const { BsFacebook, BsFillChatRightTextFill, BsInstagram, BsLightningCharge, BsPinterest } = bs

import di from 'react-icons/di'
const { DiGoogleAnalytics } = di

import fa from 'react-icons/fa'
const { FaAmazon, FaEnvelope, FaLightbulb, FaMoneyCheck, FaShopify, FaSnapchatGhost, FaTiktok } = fa

import fc from 'react-icons/fc'
const { FcGoogle } = fc

import gi from 'react-icons/gi'
const { GiBlender, GiWhaleTail } = gi

import io from 'react-icons/io'
const { IoIosPeople } = io

import si from 'react-icons/si'
const { SiSpeedtest } = si

import type { IServiceMap } from '@/types/Types.js'

const iconMap = {
  amazon: <FaAmazon color="orange" />,
  attentive: <FaEnvelope color="FFFCCC" />,
  benchmarks: <SiSpeedtest color="#1877f2" />,
  blended: <GiBlender color="#1877f2" />,
  enquirelabs: <FaLightbulb />,
  facebook: <BsFacebook color="#1778f2" />,
  'facebook-ads': <BsFacebook color="#1778f2" />,
  facebook_social: <BsFacebook color="#1778f2" />,
  finance: <FaMoneyCheck color="#1877f2" />,
  finance_total: <FaMoneyCheck color="#1877f2" />,
  old_google_ads: <FcGoogle color="#E37400" />,
  'google-ads': <FcGoogle color="#E37400" />,
  google_analytics: <DiGoogleAnalytics color="#E37400" />,
  googleAds: <FcGoogle color="#E37400" />,
  googleAnalytics: <DiGoogleAnalytics color="#E37400" />,
  gorgias: <BsFillChatRightTextFill />,
  influencers: <IoIosPeople color="#1877f2" />,
  instagram: <BsInstagram color="#e95950" />,
  klaviyo: <FaEnvelope color="#24CE78" />,
  kno: <FaLightbulb />,
  pinterest: <BsPinterest color="#c8232c" />,
  pixel: <GiWhaleTail color="#1877f2" />,
  recharge: <BsLightningCharge color="#24CE78" />,
  shopify: <FaShopify color="#96bf48" />,
  snapchat: <FaSnapchatGhost color="#FFFC00" />,
  snapchat_ads: <FaSnapchatGhost color="#FFFC00" />,
  tiktok: <FaTiktok color="#ff0050" />,
  tripleWhale: <GiWhaleTail color="#1877f2" />,
  'triple-whale': <GiWhaleTail color="#1877f2" />,
}

type IProps = {
  source: IServiceMap
}

export const SourceIcons: React.FC<IProps> = ({ source }) => {
  source = source || 'tripleWhale'

  return iconMap[source as IServiceMap] as JSX.Element
}

export default SourceIcons
