import React from 'react'
import { toHHMMSS } from '../../../utils'
import LiveStreamIcon from '../../../assets/live.png'

const homeFeed = ({ data }) => {
  console.log('data in homeFeed: ', data)

  return (
    data && (
      <div className='flex gap-3'>
        <div className='flex justify-end items-end w-[20rem] h-[12rem] z-40'>
          <img
            alt=''
            src={data?.video?.thumbnails[0].url}
            width={'100%'}
            height={'100%'}
            className='rounded-xl object-center object-contain'
          />

          {data?.video?.lengthSeconds && (
            <div
              className={`${
                data?.video?.lengthSeconds >= 3600
                  ? '-ml-[4.2rem]'
                  : '-ml-[3rem]'
              } mb-[.2rem] bg-[#00ccff] text-gray-800 flex flex-col justify-center px-1 rounded-lg h-fit items-center`}
            >
              <span className='font-bold text-sm'>
                {toHHMMSS(data?.video?.lengthSeconds)}
              </span>
            </div>
          )}
        </div>

        {/* <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col">
            <span className="font-semibold">{data?.video?.title}</span>

            {data?.video?.badges[0] === "LIVE" ? (
              <span className="text-sm text-left">
                {data?.video?.stats?.viewers} viewers
              </span>
            ) : (
              <div className="flex gap-2">
                <span className="text-sm">
                  {data?.video?.stats?.views} views
                </span>
                <span className="text-sm">
                  {data?.video?.publishedTimeText}
                </span>
              </div>
            )}
          </div>

          <span>
            <a
              href={`https://www.youtube.com/${data?.video?.author?.canonicalBaseUrl}`}
              className="text-gray-600"
            >
              {data?.video?.author?.title}
            </a>
            {data?.video?.author?.badges ? (
              <span className="rounded-full opacity-70">☑️</span>
            ) : null}
          </span>

          <div className="text-sm">{data?.video?.descriptionSnippet}</div>

          {data?.video?.badges[0] === "LIVE" && (
            <div>
              <img
                alt=""
                src={LiveStreamIcon}
                width={50}
                height={35}
                className="rounded-xl object-center object-contain"
              />
            </div>
          )}
        </div> */}
      </div>
    )
  )
}

export default homeFeed
