export default function DefrisCard({ closeModal }) {
  return (
    <div className="defris-card">
      <img src="/images/defris_card_detection.png" alt="Card image" />
      <div className="info">
        <button className="close" onClick={closeModal}>X</button>
        <h2>70% Marine plastic debris found</h2>
        <p className="question">Did you know lots of bottle microplastics particles eventually make their way into our waterways?</p>
        <p>Be the change you want to see in the planet. Share this information on Twitter <span className="hashtag">#tracktheplastic</span> and start taking action.</p>
      </div>
    </div>
  );
}
