import { useState } from 'react';
import { ThemeProvider } from '../../themes/ThemeContext';
import likandoCover from '../../assets/banner.jpg';
import { getCurrentDate } from '../../utils/date-constants';
import GenerateCode from '../../components/concepts/auth/GenerateCode/GenerateCode';
import RedeemCode from '../../components/concepts/auth/RedeemCode/RedeemCode';

export default function Auth() {
  const [authStep, setAuthStep] = useState<number>(0);
  const currentDate = getCurrentDate();

  const renderAuthStep = () => {
    switch (authStep) {
      case 0:
        return (
          <GenerateCode
            action={(step: number) => {
              setAuthStep(step);
            }}
          />
        );
      case 1:
        return (
          <RedeemCode
            action={(step: number) => {
              setAuthStep(step);
            }}
          />
        );
      default:
        return <div>Logging you in...</div>;
    }
  };

  return (
    <ThemeProvider>
      <div
        className="flex flex-row h-[100vh] relative w-full bg-gradient-to-r 
        from-indigo-800 from-10% via-sky-800 via-30% to-emerald-800 to-90% 
        justify-center items-center"
      >
        <div
          className="h-3/4 md:h-3/4 w-full md:w-1/2 bg-gradient-to-b 
          from-slate-100 to-pink-200 via-emerald-100 rounded-xl flex flex-row"
        >
          <div className="hidden lg:flex w-1/2 h-full flex-col justify-center">
            <img
              src={likandoCover}
              alt="Likando"
              className="w-full h-full object-cover rounded-l-xl"
            />
          </div>
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-between items-center relative py-4">
            <span className="text-2xl text-gray-600">Welcome Home</span>

            {renderAuthStep()}

            <span className="text-sm font-semibold text-slate-800">
              Copyright &copy; Ghost Tribes {currentDate.year}
            </span>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
