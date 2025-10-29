// CenterContent.tsx

import { IntroSectionWrapper } from "./components/IntroSectionWrapper" // Import the client wrapper

const CenterContent = () => {
  return (
    <div>
      <div className="w-full">
        {/* Use the wrapper here */}
        <IntroSectionWrapper />
      </div>
    </div>
  )
}

export default CenterContent