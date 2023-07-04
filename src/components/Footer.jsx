export default function Footer({ backgroundColor, leftTextColor, rightTextColor, borderColor, isHideBorder }) {
  const leftText = "JD";
  const rightText = "© 2023 by John Doe";
  return (
    <footer className="px-10 py-4 bg-black text-white ">
      <div className="flex justify-between items-center border-t-2 border-gray-400">
        <div>
          <h4 className="font-bold">{leftText}</h4>
        </div>
        <div className="py-4">
          <h4 className="">{rightText}</h4>
        </div>
      </div>
    </footer>
  )
}
