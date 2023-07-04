export default function Footer({ backgroundColor, leftTextColor, rightTextColor, borderColor, isHideBorder }) {
  return (
    <footer className="px-10 py-4 bg-black text-white ">
      <div className="flex justify-between items-center border-t-2 border-gray-400">
        <div>
          <h4 className="font-bold">WK</h4>
        </div>
        <div className="py-4">
          <h4 className="">© 2023 by Wuttichai Kantaseema</h4>
        </div>
      </div>
    </footer>
  )
}