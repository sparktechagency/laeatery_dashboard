
const ProfileLoading = () => {
  return (
    <>
      <div>
         <div className="w-full max-w-xl mx-auto p-6">
      {/* Profile Image div */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="animate-pulse bg-gray-300 h-20 w-20 rounded-full"></div> 
          <div className="animate-pulse bg-gray-300 w-6 h-6 rounded-full absolute bottom-0 right-0" />
        </div>
      </div>

      {/* Title div */}
      <div className="text-center mb-6">
        <div className="animate-pulse rounded-md bg-gray-300 h-7 w-24 mx-auto" />
      </div>

      {/* Tabs div */}
      <div className="flex gap-6 mb-8 justify-center">
        <div className="animate-pulse rounded-md bg-gray-300 h-5 w-20" />
        <div className="animate-pulse rounded-md bg-gray-300 h-5 w-28" />
      </div>

      {/* Form Fields div */}
      <div className="space-y-6">
        {/* Full Name Field */}
        <div className="space-y-2">
          <div className="animate-pulse rounded-md bg-gray-300 h-4 w-16" />
          <div className="animate-pulse bg-gray-300 h-12 w-full rounded-md" />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <div className="animate-pulse rounded-md bg-gray-300 h-4 w-10" />
          <div className="animate-pulse bg-gray-300 h-12 w-full rounded-md" />
        </div>

        {/* Phone Number Field */}
        <div className="space-y-2">
          <div className="animate-pulse rounded-md bg-gray-300 h-4 w-24" />
          <div className="animate-pulse bg-gray-300 h-12 w-full rounded-md" />
        </div>
      </div>

      {/* Save Button div */}
      <div className="mt-8">
        <div className="animate-pulse bg-gray-300 h-12 w-full rounded-md" />
      </div>
    </div>
      </div>
    </>
  )
}

export default ProfileLoading