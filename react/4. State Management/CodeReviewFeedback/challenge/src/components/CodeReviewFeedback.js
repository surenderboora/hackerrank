import React, { useState } from "react";


const aspects = ["Readability", "Performance", "Security", "Documentation", "Testing"];
const initialState = [];
for (let aspect of aspects) {
  initialState.push({ name: aspect, upvotes: 0, downvotes: 0 });
}

const FeedbackSystem = () => {
  const [aspects, setAspects] = useState(initialState);
  const handleVote = (aspect, voteType) => {
    // console.log(aspect, voteType);
    const updatedAspects = aspects.map((a) => {
      if(a.name === aspect.name) {
        let {upvotes, downvotes} = aspect;
        
        if (voteType === 'upvote') {
          upvotes = upvotes + 1;
        }
        if (voteType === 'downvote') {
          downvotes = downvotes + 1;
        }
        
        return {name: aspect.name, upvotes: upvotes, downvotes: downvotes };
      }
      return a;
    })
    setAspects(updatedAspects);
  };

  const cards = aspects.map((aspect, i) => {
    return <div className="pa-10 w-300 card" key={aspect.name} >
      <h2>{aspect.name}</h2>
      <div className="flex my-30 mx-0 justify-content-around">
        <button className="py-10 px-15" data-testid={`upvote-btn-${i}`}
        onClick={()=> handleVote(aspect, "upvote")}>
          👍 Upvote
        </button>
        <button className="py-10 px-15 danger" data-testid={`downvote-btn-${i}`}
        onClick={()=> handleVote(aspect, "downvote")}>
          👎 Downvote
        </button>
      </div>
      <p className="my-10 mx-0" data-testid={`upvote-count-${i}`}>
        Upvotes: <strong>{aspect.upvotes}</strong>
      </p>
      <p className="my-10 mx-0" data-testid={`downvote-count-${i}`}>
        Downvotes: <strong>{aspect.downvotes}</strong>
      </p>
    </div>
  });
  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {cards}
      </div>
    </div>
  );
};

export default FeedbackSystem;
