import React from "react";

export const Single = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-ZDsMAgcbtnua-iSCRi7bQLxLJBn019RJCjibrREgQ&s"
        alt="Wide Picture"
        className="w-2/5 h-auto object-cover" // Adjusted image size to w-2/5
      />
      <div className="max-w-3xl mt-8 px-4">
        <p className="text-lg text-gray-800 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </p>
        <p className="mt-4 text-lg text-gray-800 leading-relaxed">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
        </p>
      </div>
    </div>
  );
};
