'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { loginSchema, type LoginFormData } from '@/lib/schemas/auth'
import { HiXCircle } from 'react-icons/hi'



export default function LoginPage() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<Partial<LoginFormData>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [authError, setAuthError] = useState<string>('')
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof LoginFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = () => {
    try {
      loginSchema.parse(formData)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<LoginFormData> = {}
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            newErrors[issue.path[0] as keyof LoginFormData] = issue.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setAuthError('')

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      })

      if (result?.error) {
        setAuthError('Invalid email or password')
      } else if (result?.ok) {
        router.push('/')
      }
    } catch {
      setAuthError('Login failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl font-bold text-center mb-6">Login to Zoo Dashboard</h1>
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="fieldset-label">Email</label>
              <input 
                type="email" 
                className={`input ${errors.email ? 'input-error' : ''}`}
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <label className="label">
                  <span className="label-text-alt text-error">{errors.email}</span>
                </label>
              )}

              <label className="fieldset-label">Password</label>
              <input 
                type="password" 
                className={`input ${errors.password ? 'input-error' : ''}`}
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && (
                <label className="label">
                  <span className="label-text-alt text-error">{errors.password}</span>
                </label>
              )}

              {authError && (
                <div className="alert alert-error text-sm mt-2">
                  <HiXCircle className="h-4 w-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-neutral mt-4"
                disabled={isLoading}
              >
                {isLoading ? <span className="loading loading-spinner loading-sm"></span> : null}
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            
          </div>
        </div>
      </div>
    </div>
  )
}
