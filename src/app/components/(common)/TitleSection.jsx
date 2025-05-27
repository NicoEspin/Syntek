import { Sparkles } from 'lucide-react'


const TitleSection = ({title}) => {
  return (
    <div className='flex rounded-full gap-2 border border-primary1 items-center justify-center py-1 mx-auto w-fit mt-10 px-2'>
        <Sparkles className='text-primary1 size-3 '/>
        <h2 className='text-primary1 text-xs uppercase text-center'>{title}</h2>
    </div>
  )
}

export default TitleSection