import dynamic from 'next/dynamic'

export const Navbar = dynamic(() => import('./Navbar/Navbar'))
export const Banner = dynamic(() => import('./Banner/Banner'))
export const MultiStepForm = dynamic(() => import('./MultiStepForm/MultiStepForm'))
export const SimpleShare = dynamic(() => import('./SimpleShareComponent/SimpleShareComponent'))
export const Coutdown = dynamic(() => import('./Coutdown/Coutdown'))
export const YouTubePage = dynamic(() => import('./YoutubePage/YoutubePage'))
export const YoutubePlaylist = dynamic(() => import('./YoutubePlaylist/YoutubePlaylist'))