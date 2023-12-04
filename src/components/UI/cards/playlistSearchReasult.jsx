import React from "react";

const playlistSearchReasult = ({ data }) => {
  // console.log("data in playlist: ", data);
  return (
    data && (
      <div className="flex gap-3">
        <div className="flex w-[20rem] z-40">
          <img
            alt=""
            src={data?.playlist?.thumbnails[0].url}
            width={"100%"}
            height={"100%"}
            className=" object-center object-contain rounded-xl"
          />
          <div className="-ml-[7rem] w-[7rem] h-full rounded-r-xl opacity-95 bg-[#00ccff] text-white flex flex-col justify-center items-center">
            <span className="font-semibold text-lg">
              {data?.playlist?.stats?.videos}
            </span>
            <span className="text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2">
          <span className="font-semibold">{data?.playlist?.title}</span>
          <span>
            <a
              href={`https://www.youtube.com/${data?.playlist?.author?.canonicalBaseUrl}`}
              className="text-gray-600"
            >
              {data?.playlist?.author?.title}
            </a>
            {data?.playlist?.author?.badges ? (
              <span className="rounded-full opacity-70">☑️</span>
            ) : null}
          </span>

          <a
            href={`https://www.youtube.com/playlist?list=${data?.playlist?.author?.playlistId}`}
            className="text-gray-800"
          >
            VIEW FULL PLAYLIST
          </a>
        </div>
      </div>
    )
  );
};

export default playlistSearchReasult;
