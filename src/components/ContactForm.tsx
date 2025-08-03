import { useState } from 'react'

import axios from 'axios'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setError(null)

    try {
      const response = await axios.post('http://localhost:5000/contact', formData)
      console.log('Success:', response.data)
      setStatus('success')
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'Помилка при надсиланні форми');
      } else {
        setError('Помилка при надсиланні форми');
      }
      setStatus('error');
    }
  }



  return (
    <div className='mx-auto max-w-3xl p-4 ' id="contact">
      <h2 className='my-8 text-center text-4xl font-semibold tracking-tighter'> Let`s Connect</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <input className='mb-4 w-full appearance-none rounded-lg border border-gray-900
           bg-transparent px-4 py-2 text-sm focus:border-gray-400'
            type="text"
            name="name"
            value={formData.name}
            placeholder='Name :'
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-4'>
          <input className='w-full mb-4 appearance-none rounded-lg border border-gray-900
           bg-transparent px-4 py-2 text-sm focus:border-gray-400'
            type="email"
            name="email"
            value={formData.email}
            placeholder='Email :'
            onChange={handleChange}
            required
          />
        </div>
        <div className='mb-4'>
          <textarea
            name="message"
            value={formData.message}
            className='w-full  bg-transparent px-4 py-2  appearance-none rounded-lg border
             border-gray-900 text-sm focus:border-gray-400'
            placeholder='Messages :'
            onChange={handleChange}
            required
          />
        </div>
        <button className='w-full mb-8 text-sm text-semibold bg-transparent text-white px-4 py-2 
         rounded border hover:bg-yellow-900' type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>
      </form>

      {status === 'success' && <p style={{ color: 'green' }}>Message sent!</p>}
      {status === 'error' && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default ContactForm
