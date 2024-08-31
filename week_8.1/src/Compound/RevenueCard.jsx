export const RevenueCard = ({
    title,
    OrderCount,
    amount
  }) => {
    return (
      <div className="bg-white rounded shadow-md p-4 m-4">
        <div>
          {title}
          ?
        </div>
        <div className="flex justify-between ">
          <div className="text-gray-700">
            $ {amount}
          </div>
          {OrderCount ? 
            <div>
              {OrderCount} order(s) {">"}
            </div>
           : null}
        </div>
      </div>
    )
  }
  