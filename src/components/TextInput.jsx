import React from 'react'

const TextInput = React.forwardRef(({type,placeholder,register,name,error},ref) => {
  return (
    <div className='w-full flex flex-col mt-2'>
            <input 
            type={type}
            name={name}
            placeholder={placeholder}
            ref={ref}
            className={`w-full rounded-lg py-[6px] px-[8px] md:py-[12px] md:px-[16px] text-gray-800 text-[12px] md:text-[18px] outline-[#06425f] border p-2`}
            {...register}
            aria-invalid={error ? "true" : "false"}/>
        {error && (
            <span className='text-xs text-[#f64949fe] mt-0.5'>{error}</span>
        )}
    </div>
  )
})

export default TextInput