import logo from '../../../assets/logo-white.png';
import patternBg from '../../../assets/pattern_h.png';

export default function Sidebar() {
  return (
    <div
      className="bg-[#15283c]
        h-screen w-1/5 sticky flex flex-col shadow-lg z-50"
      style={{
        backgroundImage: `url(${patternBg})`,
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="w-full h-16 bg-[#214162] flex items-center p-4">
        <img src={logo} alt="logo" className="w-8" />
        <div className="hidden md:flex items-end ml-2">
          <span className="text-white text-xl font-semibold">Ghost Tribes</span>
          <span className="text-white font-bold text-xs bg-pink-600 p-1 rounded-full ml-1">
            cms
          </span>
        </div>
      </div>
      <div className="p-4">Menu items</div>
    </div>
  );
}
