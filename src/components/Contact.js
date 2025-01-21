import React from 'react'
//rafce
const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">contace us</h1>
      {/* <h2>po ra 🗿😂</h2> */}
      <form className="flex flex-col gap-4 w-96 rounded-sm">
        <input type="text" className="border border-black p-2 m-2" placeholder="name" />
        <input type="text" className="border border-black p-2 m-2" placeholder="Message" />
        <button className="border border-black p-2 m-2 w-fit rounded-lg bg-gray-100">submit</button>
      </form>
    </div>
  )
}

export default Contact
