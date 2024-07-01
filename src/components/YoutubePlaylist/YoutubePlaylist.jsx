import React from 'react'
import { Coutdown } from '..'
import Link from 'next/link'

const imagesAndLinks = [
    { imgSrc: '../../TN Youtube - Aula 1.png', videoId: '__xD5ioIaAA', title: 'Aula 1', Subtitle:'10/07/2024', },
    { imgSrc: '../../TN Youtube - Aula 2.png', videoId: 'KMsB1t08w7A', title: 'Aula 2', Subtitle:'17/07/2024', },
    { imgSrc: '../../TN Youtube - Aula 3.png', videoId: 'NLewIaEtXrc', title: 'Aula 3', Subtitle:'27/07/2024', },
    { imgSrc: '../../TN Youtube - Aula 4.png', videoId: 'r9H9LXUgtWU', title: 'Aula 4', Subtitle:'01/07/2024', },
    { imgSrc: '../../TN Youtube - Aula 5.png', videoId: 'xS1JhFllUiA', title: 'Aula 5', Subtitle:'08/07/2024', },
    { imgSrc: '../../TN Youtube - Aula 6.png', videoId: '8PTXYPq-XfA', title: 'Aula 6', Subtitle:'15/07/2024', },
    { imgSrc: '../../TN Youtube - Aula 7.png', videoId: '9d-BBg-1_hM', title: 'Aula 7', Subtitle:'22/07/2024', },
    { imgSrc: '../../TN Youtube - Aula 8.png', videoId: 'ihtPrqtg-as', title: 'Aula 8', Subtitle:'29/07/2024', },
];

export default function YoutubePlaylist() {
    return (
        <div className='flex flex-col lg:flex-row gap-10 w-full'>
            <div className='relative overflow-hidden'>
                <Coutdown />
            </div>
            
            <div className='flex flex-row lg:flex-col gap-20 lg:gap-0 w-full lg:w-3/12 max-h-[800px] overflow-x-scroll overflow-y-hidden lg:overflow-x-hidden lg:overflow-y-scroll'>
                {imagesAndLinks.map((item, index) => (
                    <Link className='mb-10 flex flex-col items-center' key={index} href={`https://www.youtube.com/live/${item.videoId}`}>
                        <img className=" w-60" src={item.imgSrc} alt={`Image ${index + 1}`} />
                        <p className='mt-2'>{item.title}</p>
                        <p className='mt-2 text-sm'>{item.Subtitle}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
