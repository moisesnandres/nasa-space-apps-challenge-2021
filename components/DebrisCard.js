import { TwitterShareButton, TwitterIcon } from "react-share";

export default function DebrisCard({ closeModal }) {
  return (
    <div className="debris-card">
      <img src="/images/debris_card_detection.png" alt="Card image" />
      <div className="info">
        <button className="close" onClick={closeModal}>X</button>
        <h2>70% Marine plastic debris found</h2>
        <div className="metrics">
          <div>
            <div><img src="/images/ocean_icon.png" alt="Ocean icon" />Atlantic Ocean</div>
            <div><img src="/images/timer_icon.png" alt="Timer icon" />31,7771° -40.24965°</div>
          </div>
          <div>
            <div><span>Depth:</span> 20 meters</div>
            <div><span>Time:</span> 6:40 am</div>
          </div>
        </div>
        <p className="question">Did you know lots of bottle microplastics particles eventually make their way into our waterways?</p>
        <p>Be the change you want to see in the planet. Share this information on Twitter <span className="hashtag">#tracktheplastic</span> and start taking action.</p>
        <div className="twitter-button">
          <TwitterShareButton title='I’ve found 70% Marine plastic debris on the 🌊 Atlantic Ocean 31.7771° -40.24965° with 20 meters depth at 
⏰ 6:40 am. Did you know lots of bottle microplastics particles eventually make their way into our waterways? Share the information, let’s make a change #Tracktheplastic' url='https://nasa-space-apps-challenge-2021.vercel.app'>
            <TwitterIcon size={32} round={true} />
            Tweet
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
}
