import Image from 'next/image'

export default function VerticalSlider() {
  return (
    <div className="range-container">
      <Image src="/images/color_bar.png" alt="Bar" width={42} height={400} />
      <div className="range-name">Plastic Debris Concentration</div>
    </div>
  );
}
