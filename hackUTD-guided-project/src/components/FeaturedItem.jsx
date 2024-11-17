import React from 'react'

function FeaturedItem() {
  return (
    <div className="mx-auto flex w-screen max-w-screen-lg flex-col items-center py-10">
      {/* TITLE */}
      <h1 className="text-4xl text-darkgreen poppins-bold">Your Picnic</h1>
      <hr className="mb-6 mt-4 w-1/3 border-pastelgreen opacity-35" />

      {/* BOX */}
      <div className="bg-gradient-to-r from-pastelblue to-pastelgreen shadow-2xl rounded-3xl relative mx-auto flex h-fit w-fit flex-col p-1">
        <div className="p-8 rounded-3xl bg-white shadow-inner transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center">
            <img
              className="w-1/2 object-cover rounded-2xl shadow-md transition-transform duration-500 hover:rotate-3 hover:scale-110"
              src="/images/Texarkana.jpg"
              alt="Lake Texarkana"
            />
            {/* TEXT */}
            <div className="w-1/2 space-y-6">
              {/* Location Title */}
              <h1 className="text-darkblue poppins-bold text-2xl">Lake Texarkana</h1>
              {/* RSVP Details */}
              <p className="inter-regular text-lg text-gray-600">4 Going | 3 Unsure</p>
              {/* Picnic Description */}
              <p className="inter-regular text-darkgreen">
                Time for a day of relaxation on the lake. Bring
                a floatie and a swimsuit!
              </p>
              <p className="pt-4 poppins-bold text-emerald-500 text-2xl">Going</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedItem