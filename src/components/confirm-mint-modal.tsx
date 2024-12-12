import { ConfirmDialog, confirmable, createConfirmation } from 'react-confirm'
import ReactDOM from 'react-dom'
import { Icon } from '@iconify/react/dist/iconify.js'

type Props = object

const Confirmation: ConfirmDialog<Props, boolean> = ({ ...props }) => {
  if (!props.show) return null

  return ReactDOM.createPortal(
    <div className='fixed left-0 top-0 z-[1500] flex h-screen w-screen items-center justify-center bg-black/40 p-5'>
      <div className='absolute inset-0' onClick={() => props.proceed(false)} />
      <div className='relative z-10 w-full max-w-80 animate-fadeIn space-y-4 rounded-[20px] bg-background p-5 pt-8 shadow'>
        <Icon icon='material-symbols:info' className='mx-auto text-5xl' />
        <p className='text-center'>Are you sure you want to mint?</p>
        <div className='grid grid-cols-2 gap-3'>
          <button className='h-8 rounded-full bg-primary' onClick={() => props.proceed(true)}>
            Mint
          </button>
          <button
            className='h-8 rounded-full border border-primary'
            onClick={() => props.proceed(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}

const confirmMint = createConfirmation(confirmable(Confirmation))

export default confirmMint
