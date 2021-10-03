import Image from 'next/image'

export default function DefrisCard() {
  return (
    <div className="defris-card">
      <Image src="/images/color_bar.png" alt="Bar" width={42} height={400} />
      <div className="info">
        <h2>70% Marine plastic debris found</h2>
        <p className="question">Did you know lots of bottle microplastics particles eventually make their way into our waterways?</p>
        <p>Be the change you want to see in the planet. Share this information on Twitter <span className="hashtag">#tracktheplastic</span> and start taking action.</p>
      </div>
    </div>
  );
}
