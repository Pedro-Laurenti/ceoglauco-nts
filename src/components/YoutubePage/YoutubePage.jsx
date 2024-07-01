import Link from 'next/link';
import { FaPlay } from 'react-icons/fa';
import YouTube from 'react-youtube';

const YouTubePage = () => {
    const opts = {
        playerVars: {
            autoplay: 1
        }
    };

    const onReady = (event) => {
        event.target.pauseVideo();
    };

    return (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <div className="relative hidden md:block aspect-video w-[800px] md:w-[1200px]">
                <YouTube 
                    videoId="NLewIaEtXrc" 
                    opts={{ ...opts, width: '100%', height: '100%' }} 
                    onReady={onReady} 
                    className="absolute top-0 left-0 aspect-video w-full"
                />
            </div>

            <div className="flex md:hidden flex-col my-5 items-center w-full">
                <Link href="https://www.youtube.com/@glaucoalvescosta/streams" className="bg-sky-500 hover:bg-sky-500/50 px-10 py-3 my-10 flex flex-row justify-between rounded-xl gap-5 items-center">
                    <div>Assista pelo YouTube</div><FaPlay />
                </Link>

            </div>
        </div>
    );
};

export default YouTubePage;